import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "MyProPad — Turn your phone into a high-precision trackpad",
  description:
    "Control your computer effortlessly from your mobile browser with zero mobile apps to install. Powered by Go and Linux Kernel uinput.",
};

export default function MyProPadLanding() {
  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* --- HERO SECTION --- */}
        <section className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8 pb-16 border-b-2 border-black">
          <div className="border-2 border-black px-4 py-1 text-sm font-bold uppercase tracking-widest bg-black text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            AppImage v1.0.3 Live for Linux
          </div>

          <div className="w-24 h-24 flex items-center justify-center border-2 border-black p-2 bg-gray-50">
            <Image
              src="/img/mypropad/mypropad.png"
              alt="MyProPad Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-black leading-tight uppercase tracking-tighter">
            MyProPad.
            <br />
            <span className="italic">Don&apos;t reach for the mouse.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            The trackpad you already own. Control your computer effortlessly from your mobile browser with zero mobile apps or browser extensions to install.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/ullaskunder3/mypropad/releases/download/v1.0.3/MyProPad-x86_64.AppImage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-black px-8 py-4 text-lg font-bold uppercase tracking-wider bg-black text-white hover:bg-gray-800 transition-colors duration-200"
            >
              Download AppImage (v1.0.3)
            </a>
            <a
              href="https://github.com/ullaskunder3/mypropad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-black px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-200"
            >
              GitHub Repository
            </a>
          </div>
        </section>

        {/* --- WIDE HERO BANNER --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-b-2 border-black">
          <div className="border-2 border-black w-full overflow-hidden bg-gray-50 p-8 flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-48 h-48 border-2 border-black p-2 bg-white flex items-center justify-center">
                <Image
                  src="/img/mypropad/qr.webp"
                  alt="Scannable Pairing QR Code"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider">1. Scan QR Code</span>
            </div>

            <div className="text-4xl font-serif hidden md:block">→</div>

            <div className="flex flex-col items-center text-center gap-4 max-w-md">
              <div className="border-2 border-black p-6 bg-white text-left font-mono text-sm space-y-2 w-full">
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  WebSocket Connected
                </div>
                <div className="text-gray-600 text-xs">Engine: 120Hz Non-Blocking Delta Dispatch</div>
                <div className="text-gray-600 text-xs">Kernel Target: /dev/uinput</div>
                <div className="text-gray-600 text-xs">Latency: &lt; 2ms (Local Wi-Fi)</div>
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider">2. Instant Control</span>
            </div>
          </div>
        </section>

        {/* --- THE PROBLEM & PLAN --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 border-b-2 border-black">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-serif font-bold uppercase border-b-2 border-black pb-4">The Frustration</h3>
            <p className="text-lg leading-relaxed">
              <strong>Extra Peripheral Friction:</strong> Reaching for a separate physical mouse while lying in bed or watching videos from across the room breaks your flow.<br/><br/>
              <strong>App Stores &amp; Bloatware:</strong> Most virtual trackpad utilities force you to install bloated mobile apps filled with ads, account signups, or background tracking.<br/><br/>
              <strong>Lag &amp; Sub-pixel Jitter:</strong> Naive WebSocket implementations suffer from Wi-Fi buffer bloat, input stalls, and micro-drag truncations that make small cursor adjustments impossible.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-serif font-bold uppercase border-b-2 border-black pb-4">The Architecture</h3>
            <ul className="text-lg leading-relaxed list-disc list-outside pl-6 space-y-4 font-medium">
              <li><strong>Zero Mobile Apps:</strong> Open your smartphone camera, scan the desktop app&apos;s QR code, and open the web trackpad surface instantly.</li>
              <li><strong>Go &amp; Linux Kernel /dev/uinput:</strong> Native performance driving low-level OS input events directly without X11 or Wayland wrapper overhead.</li>
              <li><strong>120Hz Movement Coalescing:</strong> Non-blocking server dispatch loop that aggregates incoming touch deltas without network channel congestion.</li>
              <li><strong>Sub-Pixel Float Accumulator:</strong> Retains fractional touch micro-movements across ticks to eliminate cursor jitter.</li>
            </ul>
          </div>
        </section>

        {/* --- FEATURE HIGHLIGHT 1 --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b-2 border-black">
          <div className="border-2 border-black p-8 bg-gray-50 flex flex-col gap-4">
            <div className="font-mono text-xs uppercase tracking-widest bg-black text-white px-3 py-1 self-start">
              Performance Architecture
            </div>
            <h3 className="text-3xl font-bold font-serif">120Hz Motion Engine</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Touch deltas sent from your phone are processed in real-time. The Go server uses an in-memory thread-safe delta accumulator and flushes events to the kernel at 120Hz (8ms intervals).
            </p>
            <div className="border-t border-black pt-4 grid grid-cols-2 gap-4 font-mono text-xs">
              <div>
                <span className="text-gray-500 block">Queue Strategy</span>
                <span className="font-bold">Zero-Backlog Coalescing</span>
              </div>
              <div>
                <span className="text-gray-500 block">Touch Precision</span>
                <span className="font-bold">Sub-Pixel Float Accumulation</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase leading-tight mb-4">
                Instant QR Pairing
                <br />
                &amp; 100% Local Privacy
              </h2>
              <p className="text-lg leading-relaxed">
                No accounts, cloud servers, or external internet required. Launch MyProPad on your PC, scan the generated local QR code with your mobile device, and control your cursor immediately. Your touch data stays strictly inside your local Wi-Fi network.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase leading-tight mb-4 pt-8 border-t-2 border-black">
                AppImage Packaging
              </h2>
              <p className="text-lg leading-relaxed">
                Packaged into a single self-contained Linux AppImage file (v1.0.3) for plug-and-play execution across Ubuntu, Debian, Fedora, Arch, and all major Linux distributions.
              </p>
            </div>
          </div>
        </section>

        {/* --- MULTI-TOUCH GESTURES SHOWCASE --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-b-2 border-black">
          <h2 className="text-4xl font-serif font-bold uppercase mb-12 text-center">
            Native Multi-Touch Gestures
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-2 border-black p-6 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold mb-4 block">👆 1-Finger Drag</span>
                <h4 className="font-bold text-lg mb-2">Cursor Movement</h4>
                <p className="text-sm text-gray-600 leading-relaxed">High-precision pointer movement with sub-pixel float smoothing.</p>
              </div>
            </div>

            <div className="border-2 border-black p-6 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold mb-4 block">💥 1-Finger Tap</span>
                <h4 className="font-bold text-lg mb-2">Primary Click</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Instant left click trigger anywhere on your phone screen.</p>
              </div>
            </div>

            <div className="border-2 border-black p-6 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold mb-4 block">✌️ 2-Finger Tap</span>
                <h4 className="font-bold text-lg mb-2">Context Menu</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Triggers a secondary right click action effortlessly.</p>
              </div>
            </div>

            <div className="border-2 border-black p-6 bg-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold mb-4 block">📜 2-Finger Drag</span>
                <h4 className="font-bold text-lg mb-2">Vertical Scroll</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Smooth page scrolling matching physical laptop trackpad habits.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
