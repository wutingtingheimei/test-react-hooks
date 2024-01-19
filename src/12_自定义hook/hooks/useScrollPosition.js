import { useEffect, useState } from "react";


const useScrollPosition = () => {
  console.log('111111111111111111')
  const [ scrollX, setScrollX] = useState(0)
  const [ scrollY, setScrollY] = useState(0)
  useEffect(() => {
    function handleScroll() {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return [scrollX, scrollY]
}


export default useScrollPosition
