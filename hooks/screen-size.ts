import { useEffect, useState } from 'react';

const useScreenSize = (): { width: number, height: number } => {
  const [screenSize, setScreenSize] = useState({width: 100, height: 100});
  const updateScreenSize = () => {
    setScreenSize({width: window.innerWidth, height: window.innerHeight});
  }
  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    }
  }, []);

  return screenSize;
}

export default useScreenSize;
