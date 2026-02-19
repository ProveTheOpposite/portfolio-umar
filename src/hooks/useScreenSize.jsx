import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
