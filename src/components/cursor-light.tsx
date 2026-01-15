'use client';

import { useEffect, useState } from 'react';

export const CursorLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setPosition({ x: touch.clientX, y: touch.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <>
      {/* Background light effect */}
      <div
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          background: `radial-gradient(circle 200px at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)`,
        }}
      />
      {/* Cursor */}
      <div
        className="pointer-events-none fixed z-50"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-2px, -2px)',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="red"
          stroke="yellow"
          strokeWidth="2"
          strokeLinejoin="round"
        >
          <path d="M3 2 L21 12 L14 14 L12 21 Z" />
        </svg>
      </div>
    </>
  );
};
