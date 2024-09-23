import { useEffect, useRef, useState } from "react";

export interface ArrowPosition {
  x: number;
  y: number;
}

const useManageArrows = () => {
  const [arrows, setArrows] = useState<ArrowPosition[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [currentArrow, setCurrentArrow] = useState<ArrowPosition | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCurrentArrow({ x, y });
      }
    };

    const handleMouseUp = () => {
      if (isDragging && currentArrow) {
        setArrows([...arrows, currentArrow]);
        setIsDragging(false);
        setCurrentArrow(null);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, currentArrow, arrows]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCurrentArrow({ x, y });
      setIsDragging(true);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      setCurrentArrow({ x, y });
      setIsDragging(true);
    }
  };

  return {
    targetRef,
    arrows,
    currentArrow,
    handleTouchStart,
    handleMouseDown,
  };
};

export default useManageArrows;
