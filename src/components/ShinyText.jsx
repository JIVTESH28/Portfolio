import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';

export default function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = '',
  color = '#e2e8f0',
  shineColor = '#ffffff',
  spread = 100,
}) {
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    if (disabled) return;
    const duration = speed * 1000;
    const p = ((time % duration) / duration) * 100;
    progress.set(p);
  });

  const backgroundPosition = useTransform(progress, (p) => `${150 - p * 2}% center`);

  const gradientStyle = {
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{
        ...gradientStyle,
        backgroundPosition,
      }}
    >
      {text}
    </motion.span>
  );
}
