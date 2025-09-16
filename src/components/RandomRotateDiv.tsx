import { useEffect, useState } from "react";

const RandomRotatedDiv = () => {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomAngle = Math.floor(Math.random() * 360 - 180);
      const randomScale = 1 + Math.random() * 0.1; // between 1 and 1.1
      setRotation(randomAngle);
      setScale(randomScale);
    }, 4000); // every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/40 to-purple-500/40 
                 dark:from-blue-800/40 dark:to-purple-800/40 
                 transition-transform duration-[3500ms] ease-in-out"
      style={{
        transform: `rotate(${rotation}deg) scale(${scale})`,
      }}
    />
  );
};

export default RandomRotatedDiv;
