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
  pageViews: number;
  impressions: number;
}

export interface ExtensionStats {
  totalInstalls: number;
  totalUninstalls: number;
  activeInstalls: number;
  retentionRate: number;
  totalPageViews: number;
  totalImpressions: number;
  conversionRate: number;
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
    const pageViewsFile = files.find(f => f.startsWith("Page views_") && f.endsWith(".csv"));
    const impressionsFile = files.find(f => f.startsWith("Impressions across the Chrome Web Store_") && f.endsWith(".csv"));

    if (!installsFile || !uninstallsFile || !regionsFile) {
      throw new Error("Missing one or more CSV stats files in data folder");
    }

    const installsContent = fs.readFileSync(path.join(dataDir, installsFile), "utf-8");
    const uninstallsContent = fs.readFileSync(path.join(dataDir, uninstallsFile), "utf-8");
    const regionsContent = fs.readFileSync(path.join(dataDir, regionsFile), "utf-8");
    const pageViewsContent = pageViewsFile ? fs.readFileSync(path.join(dataDir, pageViewsFile), "utf-8") : "";
    const impressionsContent = impressionsFile ? fs.readFileSync(path.join(dataDir, impressionsFile), "utf-8") : "";

    // Parse installs
    let installsLines = installsContent.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (installsLines.length > 32) installsLines = [...installsLines.slice(0, 2), ...installsLines.slice(-30)];
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
    let uninstallsLines = uninstallsContent.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (uninstallsLines.length > 32) uninstallsLines = [...uninstallsLines.slice(0, 2), ...uninstallsLines.slice(-30)];
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
    let regionsLines = regionsContent.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (regionsLines.length > 32) regionsLines = [...regionsLines.slice(0, 2), ...regionsLines.slice(-30)];
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

    // Parse page views
    let pageViewsLines = pageViewsContent ? pageViewsContent.split(/\r?\n/).map(l => l.trim()).filter(Boolean) : [];
    if (pageViewsLines.length > 32) pageViewsLines = [...pageViewsLines.slice(0, 2), ...pageViewsLines.slice(-30)];
    const pageViewsMap = new Map<string, number>();
    let totalPageViews = 0;
    
    for (let i = 2; i < pageViewsLines.length; i++) {
      const parts = pageViewsLines[i].split(",");
      if (parts.length >= 2) {
        const date = parts[0];
        const val = parseInt(parts[1], 10) || 0;
        pageViewsMap.set(date, val);
        totalPageViews += val;
      }
    }

    // Parse impressions
    let impressionsLines = impressionsContent ? impressionsContent.split(/\r?\n/).map(l => l.trim()).filter(Boolean) : [];
    if (impressionsLines.length > 32) impressionsLines = [...impressionsLines.slice(0, 2), ...impressionsLines.slice(-30)];
    const impressionsMap = new Map<string, number>();
    let totalImpressions = 0;
    
    for (let i = 2; i < impressionsLines.length; i++) {
      const parts = impressionsLines[i].split(",");
      if (parts.length >= 2) {
        const date = parts[0];
        const val = parseInt(parts[1], 10) || 0;
        impressionsMap.set(date, val);
        totalImpressions += val;
      }
    }

    // Merge history
    const allDates = Array.from(new Set([
      ...installsMap.keys(), 
      ...uninstallsMap.keys(),
      ...pageViewsMap.keys(),
      ...impressionsMap.keys()
    ])).sort((a, b) => {
      return new Date(a).getTime() - new Date(b).getTime();
    });

    const history: HistoryPoint[] = allDates.map(date => ({
      date,
      installs: installsMap.get(date) || 0,
      uninstalls: uninstallsMap.get(date) || 0,
      pageViews: pageViewsMap.get(date) || 0,
      impressions: impressionsMap.get(date) || 0
    }));

    const activeInstalls = Math.max(0, totalInstalls - totalUninstalls);
    const retentionRate = totalInstalls > 0 ? parseFloat(((activeInstalls / totalInstalls) * 100).toFixed(1)) : 0;
    const conversionRate = totalPageViews > 0 ? parseFloat(((totalInstalls / totalPageViews) * 100).toFixed(1)) : 0;

    return {
      totalInstalls,
      totalUninstalls,
      activeInstalls,
      retentionRate,
      totalPageViews,
      totalImpressions,
      conversionRate,
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
      totalPageViews: 0,
      totalImpressions: 0,
      conversionRate: 0,
      regions: [],
      history: []
    };
  }
}
