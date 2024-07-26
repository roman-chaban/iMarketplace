import { useEffect } from "react";

export const useUpPage = (): void => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
};
