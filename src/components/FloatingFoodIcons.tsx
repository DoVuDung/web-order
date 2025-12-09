'use client';

import { useEffect, useState } from 'react';

interface FloatingIcon {
  id: string;
  emoji: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

/**
 * Floating food icons that rise from bottom to top
 * More subtle and less distracting than the full background
 */
export default function FloatingFoodIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  const foodEmojis = [
    '🍕', '🍔', '🍟', '🌭', '🥪', '🌮', '🌯',
    '🍱', '🍜', '🍝', '🍛', '🍲', '🍣', '🍤',
    '🥟', '🍙', '🍚', '☕', '🧃', '🍦',
  ];

  useEffect(() => {
    const generateIcons = () => {
      const newIcons: FloatingIcon[] = Array.from({ length: 15 }, (_, i) => ({
        id: `float-${Date.now()}-${i}`,
        emoji: foodEmojis[Math.floor(Math.random() * foodEmojis.length)],
        left: Math.random() * 90 + 5, // 5-95%
        size: Math.random() * 20 + 15, // 15-35px
        duration: Math.random() * 10 + 15, // 15-25s
        delay: Math.random() * 20, // 0-20s
      }));

      setIcons(newIcons);
    };

    generateIcons();
    
    // Regenerate icons periodically to keep animation fresh
    const interval = setInterval(generateIcons, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-15 dark:opacity-10">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute animate-float-up"
          style={{
            left: `${icon.left}%`,
            fontSize: `${icon.size}px`,
            animationDuration: `${icon.duration}s`,
            animationDelay: `${icon.delay}s`,
          }}
        >
          {icon.emoji}
        </div>
      ))}
    </div>
  );
}

