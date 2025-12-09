'use client';

import { useEffect, useState } from 'react';

interface FoodIcon {
  id: string;
  emoji: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

export default function FoodIconsBackground() {
  const [foodIcons, setFoodIcons] = useState<FoodIcon[]>([]);

  const foodEmojis = [
    '🍕', '🍔', '🍟', '🌭', '🥪', '🌮', '🌯', '🥙',
    '🍱', '🍜', '🍝', '🍛', '🍲', '🥘', '🍣', '🍤',
    '🥟', '🍙', '🍚', '🍘', '🥠', '🥡', '🧆', '🍖',
    '🍗', '🥓', '🥩', '🍕', '🥗', '🍿', '🧈', '🍞',
    '🥐', '🥖', '🥨', '🥯', '🧀', '🍳', '🥞', '🧇',
    '🥤', '☕', '🍵', '🧃', '🧋', '🍦', '🍧', '🍨',
  ];

  useEffect(() => {
    // Generate random food icons
    const icons: FoodIcon[] = Array.from({ length: 30 }, (_, i) => ({
      id: `food-${i}`,
      emoji: foodEmojis[Math.floor(Math.random() * foodEmojis.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 20, // 20-50px
      duration: Math.random() * 20 + 15, // 15-35s
      delay: Math.random() * -20, // Start at random points in animation
      rotation: Math.random() * 360,
    }));

    setFoodIcons(icons);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-20 dark:opacity-10">
      {foodIcons.map((icon) => (
        <div
          key={icon.id}
          className="absolute animate-float-food"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            fontSize: `${icon.size}px`,
            animationDuration: `${icon.duration}s`,
            animationDelay: `${icon.delay}s`,
            transform: `rotate(${icon.rotation}deg)`,
          }}
        >
          {icon.emoji}
        </div>
      ))}
    </div>
  );
}

