import { useEffect, useState } from "react";

/**
 * @function useOnIntersect
 * @param {React.RefObject<HTMLElement>} elementToWatch - Elemento a ser observado
 * @param {boolean} once - Se true, executa apenas uma vez
 * @param {IntersectionObserverInit} options - Opções do Intersection Observer API
 * @returns {boolean} - Estado representando a visibilidade do elemento
 */
export const useOnIntersect = (
  elementToWatch: React.RefObject<HTMLElement>,
  once: boolean = true,
  options: IntersectionObserverInit = { threshold: 0.15 }
): boolean => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementToWatch.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        if (once) {
          observer.unobserve(entry.target);
        }
      } else {
        setVisible(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementToWatch, once, options]);

  return visible;
};