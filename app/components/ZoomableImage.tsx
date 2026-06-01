"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface ZoomableImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function ZoomableImage({
  src,
  alt,
  style,
  className
}: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
    };
    if (isZoomed) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  const modalContent = isZoomed && mounted ? (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "zoom-out",
        padding: "2rem",
        animation: "fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards"
      }}
      onClick={() => setIsZoomed(false)}
    >
      <div 
        style={{ 
          position: "relative", 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          animation: "scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards"
        }}
      >
        {/* Close Button */}
        <button
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "white",
            borderRadius: "50%",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 100000,
            transition: "all 0.2s ease"
          }}
          className="zoomable-close-btn"
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(false);
          }}
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <img 
          src={src} 
          alt={alt} 
          style={{ 
            maxWidth: "95vw", 
            maxHeight: "95vh", 
            objectFit: "contain",
            borderRadius: "8px",
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.6)",
            userSelect: "none"
          }} 
          onClick={(e) => e.stopPropagation()} 
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      <div 
        className={`zoomable-image-container ${className || ""}`}
        style={{ 
          cursor: "zoom-in", 
          overflow: "hidden",
          position: "relative",
          width: "100%",
          display: "block",
          ...style 
        }}
        onClick={() => setIsZoomed(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          style={{ 
            width: "100%", 
            height: "auto", 
            display: "block",
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
          }} 
          className="main-display-img"
        />
      </div>

      {mounted && createPortal(modalContent, document.body)}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.96); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .zoomable-image-container:hover .main-display-img {
          transform: scale(1.015);
        }
        .zoomable-close-btn:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}
