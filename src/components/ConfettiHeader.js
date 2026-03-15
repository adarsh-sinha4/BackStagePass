import React, { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import './ConfettiHeader.css';

function ConfettiHeader({ title }) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height - 10 });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="confetti-header" ref={containerRef}>
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={140}
        recycle={true}
        gravity={0.1}
        colors={["#34d399", "#10b981", "#6ee7b7", "#fbbf24", "#a3e635"]}
        drawShape={(ctx) => {
                ctx.beginPath();
                ctx.moveTo(-5, -2);
                ctx.lineTo(5, -2);
                ctx.quadraticCurveTo(7, 0, 5, 2);
                ctx.lineTo(-5, 2);
                ctx.quadraticCurveTo(-7, 0, -5, -2);
                ctx.fill();
              }}
      />
      <div className="confetti-title">{title}</div>
    </div>
  );
}

export default ConfettiHeader;
