import { useEffect, useState } from "react";

export const usePageEnd = (callback: () => void) => {
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasReachedEnd) return;

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        setHasReachedEnd(true);
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, hasReachedEnd]);
};
