"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react";

export default function KirokuClient() {
  // Video State
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <main className="pt-24 pb-16">
      {/* --- HERO SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8 pb-16 border-b-2 border-black">
        {/* Status Badge */}
        <div className="border-2 border-black px-4 py-1 text-sm font-bold uppercase tracking-widest bg-black text-white flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
          Coming Soon
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-serif font-black leading-tight uppercase tracking-tighter">
          Kiroku.
          <br />
          <span className="italic font-normal text-3xl md:text-5xl block mt-2 text-gray-700">
            Where speed meets serenity for your writing.
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium text-gray-800">
          A high-speed, local-first living library and distraction-free workspace.
        </p>

        {/* Join Waitlist Redirect Button */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href="http://ullaskunder.com/wl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border-2 border-black px-8 py-4 text-base font-bold uppercase tracking-wider bg-black text-white hover:bg-gray-800 transition-colors duration-200 min-w-[220px]"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* --- VIDEO DEMO SHOWCASE --- */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="border-2 border-black bg-black overflow-hidden shadow-lg">
          {/* Top Window Bar */}
          <div className="bg-gray-900 border-b border-gray-800 px-4 py-2.5 flex items-center justify-between text-xs text-gray-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              <span className="ml-2 font-sans text-gray-300 font-medium">Kiroku Canvas Preview</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Live Preview</span>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative aspect-[16/10] w-full bg-black group">
            <video
              ref={videoRef}
              src="/kiroku-demo.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Overlay Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 pointer-events-none">
              <div className="flex items-center justify-between text-white pointer-events-auto">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition-colors"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white fill-white ml-0.5" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition-colors"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                  </button>
                </div>
                <a
                  href="http://ullaskunder.com/wl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono bg-white text-black px-4 py-2 border border-black font-bold uppercase hover:bg-gray-200 transition-colors flex items-center gap-1.5"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOTTOM WAITLIST BANNER --- */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <div className="border-2 border-black p-8 md:p-12 bg-black text-white space-y-6">
          <div className="inline-flex items-center gap-2 border border-gray-700 px-3 py-1 text-xs font-mono text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>COMING SOON</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-tight">
            Be first to experience Kiroku.
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Join the private waitlist to get early beta access when we launch.
          </p>

          <div className="flex justify-center pt-2">
            <a
              href="http://ullaskunder.com/wl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-white px-8 py-4 text-base font-bold uppercase tracking-wider bg-white text-black hover:bg-gray-200 transition-colors duration-200 min-w-[220px]"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
