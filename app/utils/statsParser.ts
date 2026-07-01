import fs from "fs";
import path from "path";

export interface RegionStat {
  name: string;
  value: number;
  percentage: number;
}

export interface HistoryPoint {
  date: string;
  installs: number;
  uninstalls: number;
}

export interface ExtensionStats {
  totalInstalls: number;
  totalUninstalls: number;
  activeInstalls: number;
  retentionRate: number;
  regions: RegionStat[];
  history: HistoryPoint[];
}

export function getExtensionStats(): ExtensionStats {
  try {
    const dataDir = path.join(process.cwd(), "data");
    
    if (!fs.existsSync(dataDir)) {
      throw new Error(`Data directory not found at ${dataDir}`);
    }

    const files = fs.readdirSync(dataDir);
    const installsFile = files.find(f => f.startsWith("Installs_") && f.endsWith(".csv"));
    const uninstallsFile = files.find(f => f.startsWith("Uninstalls_") && f.endsWith(".csv"));
    const regionsFile = files.find(f => f.startsWith("Installs by region_") && f.endsWith(".csv"));

    if (!installsFile || !uninstallsFile || !regionsFile) {
      throw new Error("Missing one or more CSV stats files in data folder");
    }

    const installsContent = fs.readFileSync(path.join(dataDir, installsFile), "utf-8");
    const uninstallsContent = fs.readFileSync(path.join(dataDir, uninstallsFile), "utf-8");
    const regionsContent = fs.readFileSync(path.join(dataDir, regionsFile), "utf-8");

    // Parse installs
    const installsLines = installsContent.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const installsMap = new Map<string, number>();
    let totalInstalls = 0;
    
    // Start from line index 2 (skip "Installs" and "Date,Installs")
    for (let i = 2; i < installsLines.length; i++) {
      const parts = installsLines[i].split(",");
      if (parts.length >= 2) {
        const date = parts[0];
        const val = parseInt(parts[1], 10) || 0;
        installsMap.set(date, val);
        totalInstalls += val;
      }
    }

    // Parse uninstalls
    const uninstallsLines = uninstallsContent.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const uninstallsMap = new Map<string, number>();
    let totalUninstalls = 0;
    
    // Start from line index 2 (skip "Uninstalls" and "Date,Uninstalls")
    for (let i = 2; i < uninstallsLines.length; i++) {
      const parts = uninstallsLines[i].split(",");
      if (parts.length >= 2) {
        const date = parts[0];
        const val = parseInt(parts[1], 10) || 0;
        uninstallsMap.set(date, val);
        totalUninstalls += val;
      }
    }

    // Parse regions
    const regionsLines = regionsContent.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const regionHeaders = regionsLines[1] ? regionsLines[1].split(",") : [];
    const regionTotals = new Map<string, number>();
    
    // Initialize regions (skip first column "Date")
    for (let j = 1; j < regionHeaders.length; j++) {
      regionTotals.set(regionHeaders[j], 0);
    }

    for (let i = 2; i < regionsLines.length; i++) {
      const parts = regionsLines[i].split(",");
      if (parts.length >= regionHeaders.length) {
        for (let j = 1; j < regionHeaders.length; j++) {
          const region = regionHeaders[j];
          const val = parseInt(parts[j], 10) || 0;
          regionTotals.set(region, (regionTotals.get(region) || 0) + val);
        }
      }
    }

    const regionsList: RegionStat[] = Array.from(regionTotals.entries())
      .map(([name, value]) => ({
        name,
        value,
        percentage: totalInstalls > 0 ? parseFloat(((value / totalInstalls) * 100).toFixed(1)) : 0
      }))
      .sort((a, b) => b.value - a.value);

    // Merge history
    const allDates = Array.from(new Set([...installsMap.keys(), ...uninstallsMap.keys()])).sort((a, b) => {
      return new Date(a).getTime() - new Date(b).getTime();
    });

    const history: HistoryPoint[] = allDates.map(date => ({
      date,
      installs: installsMap.get(date) || 0,
      uninstalls: uninstallsMap.get(date) || 0
    }));

    const activeInstalls = Math.max(0, totalInstalls - totalUninstalls);
    const retentionRate = totalInstalls > 0 ? parseFloat(((activeInstalls / totalInstalls) * 100).toFixed(1)) : 0;

    return {
      totalInstalls,
      totalUninstalls,
      activeInstalls,
      retentionRate,
      regions: regionsList,
      history
    };
  } catch (error) {
    console.error("Error reading or parsing extension stats CSV:", error);
    return {
      totalInstalls: 0,
      totalUninstalls: 0,
      activeInstalls: 0,
      retentionRate: 0,
      regions: [],
      history: []
    };
  }
}
