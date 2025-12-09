'use client';

/**
 * Animated gradient background for a modern, dynamic look
 */
export default function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 animate-gradient opacity-30 dark:opacity-20"
        style={{
          background: 'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff, #ff6b6b)',
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Food pattern overlay */}
      <div className="absolute inset-0 food-pattern-bg opacity-5 dark:opacity-10" />
      
      {/* Radial gradient for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.1) 100%)',
        }}
      />
    </div>
  );
}

