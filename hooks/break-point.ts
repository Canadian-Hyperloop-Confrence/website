import { useEffect, useState } from 'react';
const useBreakpoint = (breakpoint: string): boolean => {
    const [biggerThanBreakPoint, setBiggerThanBreakPoint] = useState<boolean>(false);
    const [size] = useState<number>(parseInt(breakpoint.slice(0, breakpoint.length-2), 10));
    useEffect(() => {
      setBiggerThanBreakPoint(window.innerWidth > size);
      const resizeHandler = () => {
        setBiggerThanBreakPoint(window.innerWidth > size)
      }
      window.addEventListener('resize', resizeHandler);
      return function unMount() {
        window.removeEventListener('resize', resizeHandler);
      }
    });
    return biggerThanBreakPoint;
  }
export default useBreakpoint;