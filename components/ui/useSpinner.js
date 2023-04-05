import { useEffect, useState } from "react";

export const useSpinner = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    if (showSpinner) {
      const timer = setTimeout(() => {
        setShowSpinner(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showSpinner]);

  return showSpinner;
};
