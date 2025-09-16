import { useEffect, useState } from "react";

const RandomRotatingDiv = () => {
  const [rotation, setRotation] = useState(0);
  const [duration, setDuration] = useState(3000);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random angle between 0 and 360
      const randomAngle = Math.floor(Math.random() * 360);
      // Pick a random speed between 2s and 6s
      const randomDuration = Math.floor(Math.random() * 4000) + 2000;

      setRotation(randomAngle);
      setDuration(randomDuration);
    }, 4000); // every 4s we get new values

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-full rounded-2xl bg-gradient-to-br 
                 from-blue-500/40 to-purple-500/40 
                 dark:from-blue-800/40 dark:to-purple-800/40 
                 relative"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: `transform ${duration}ms ease-in-out`,
        WebkitMaskImage:
          "radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "cover",
        maskImage:
          "radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "cover",
      }}
    />
  );
};

export default RandomRotatingDiv;
