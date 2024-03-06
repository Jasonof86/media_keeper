
'use client'
import React, { useEffect, useState } from 'react';

interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage }) => {
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    setColor(getColorForPercentage(percentage));
  }, [percentage]);

  const getColorForPercentage = (percentage: number): string => {
    if (percentage <= 25) {
      return 'bg-red-500';
    } else if (percentage <= 50) {
      return 'bg-yellow-500';
    } else if (percentage <= 75) {
      return 'bg-green-500';
    } else {
      return 'bg-blue-500';
    }
  };

  return (
    <div className="relative w-48 h-48">
      <div
        className={`rounded-full w-full h-full ${color} flex items-center justify-center`}
        style={{
          background: `conic-gradient(${color} ${percentage}%, #e2e8f0 ${percentage}%)`,
        }}
      >
        <span className="text-lg font-bold">{percentage}%</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;