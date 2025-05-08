'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  size: number;
  color: string;
  highlight?: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  phase: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with higher pixel density for retina displays
    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * pixelRatio;
    canvas.height = window.innerHeight * pixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(pixelRatio, pixelRatio);

    // Get computed colors from CSS variables
    const getComputedColor = (colorVar: string) => {
      const computedStyle = getComputedStyle(document.documentElement);
      return computedStyle.getPropertyValue(colorVar).trim();
    };

    // Create stars
    const stars: Star[] = [];
    const numStars = 200;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.5 + 0.5,
        brightness: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Create nebula points
    const points: Point[] = [];
    const colors = [
      getComputedColor('--primary-rgb'),
      getComputedColor('--secondary-rgb'),
      getComputedColor('--accent-rgb'),
    ];

    // Generate nebula points
    const fixedPositions = [
      { x: 0.2, y: 0.2 }, { x: 0.8, y: 0.2 },
      { x: 0.4, y: 0.4 }, { x: 0.6, y: 0.4 },
      { x: 0.2, y: 0.6 }, { x: 0.8, y: 0.6 },
      { x: 0.4, y: 0.8 }, { x: 0.6, y: 0.8 },
      { x: 0.3, y: 0.3 }, { x: 0.7, y: 0.3 },
      { x: 0.3, y: 0.7 }, { x: 0.7, y: 0.7 }
    ];

    fixedPositions.forEach((pos, i) => {
      points.push({
        x: pos.x * window.innerWidth,
        y: pos.y * window.innerHeight,
        size: 0.4 + (i % 3) * 0.1,
        color: colors[i % colors.length],
        highlight: i % 4 === 0
      });
    });

    let time = 0;
    const animate = () => {
      time += 0.01;
      
      // Clear canvas
      ctx.fillStyle = `rgb(var(--background-rgb))`;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw stars
      stars.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.phase) * 0.5 + 0.5;
        const brightness = star.brightness * twinkle;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.8})`;
        ctx.fill();

        // Add star glow
        const glowGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        glowGradient.addColorStop(0, `rgba(255, 255, 255, ${brightness * 0.3})`);
        glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = glowGradient;
        ctx.fillRect(star.x - star.size * 3, star.y - star.size * 3, star.size * 6, star.size * 6);
      });

      // Draw nebula points
      points.forEach((point) => {
        const gradientRadius = window.innerWidth * 0.25 * point.size;
        const gradient = ctx.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          gradientRadius
        );

        // Enhanced gradient steps with brighter colors
        gradient.addColorStop(0, `rgba(${point.color}, ${point.highlight ? '0.25' : '0.15'})`);
        gradient.addColorStop(0.3, `rgba(${point.color}, ${point.highlight ? '0.15' : '0.08'})`);
        gradient.addColorStop(0.6, `rgba(${point.color}, ${point.highlight ? '0.08' : '0.03'})`);
        gradient.addColorStop(1, `rgba(${point.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        // Add highlight glow for highlighted points
        if (point.highlight) {
          const glowGradient = ctx.createRadialGradient(
            point.x,
            point.y,
            0,
            point.x,
            point.y,
            gradientRadius * 1.2
          );

          glowGradient.addColorStop(0, `rgba(255, 255, 255, 0.15)`);
          glowGradient.addColorStop(0.5, `rgba(255, 255, 255, 0.08)`);
          glowGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

          ctx.fillStyle = glowGradient;
          ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        }
      });

      // Draw connecting lines
      points.forEach((point1, i) => {
        points.slice(i + 1).forEach((point2) => {
          const dx = point1.x - point2.x;
          const dy = point1.y - point2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 300;

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(point1.x, point1.y);
            ctx.lineTo(point2.x, point2.y);
            
            const opacity = 0.08 * Math.pow(1 - distance / maxDistance, 2);
            const lineWidth = (1 - distance / maxDistance) * 0.8;
            
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(pixelRatio, pixelRatio);

      // Update star positions
      stars.forEach(star => {
        star.x = (star.x / window.innerWidth) * window.innerWidth;
        star.y = (star.y / window.innerHeight) * window.innerHeight;
      });

      // Update nebula points
      points.forEach((point, i) => {
        const pos = fixedPositions[i];
        point.x = pos.x * window.innerWidth;
        point.y = pos.y * window.innerHeight;
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 -z-10"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'var(--background)' }}
      />
      <div className="absolute inset-0 bg-background/5 backdrop-blur-[120px]" />
    </motion.div>
  );
}