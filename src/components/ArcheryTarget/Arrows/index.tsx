"use client";

import { FC } from "react";
import styles from "../ArcheryTarget.module.css";
import useManageArrows from "../hooks/useManageArrows";
import { calculateScore } from "../util";
import Arrow from "./Arrow";
import ArrowLine from "./ArrowLine";
import { message } from "antd";

interface Arrows {
  radius: number;
  ringCount: number;
}

const Arrows: FC<Arrows> = ({ radius, ringCount }) => {
  const { targetRef, arrows, currentArrow, handleMouseDown, handleTouchStart } =
    useManageArrows();

  const [messageApi, messageContextHolder] = message.useMessage();

  const success = (score: number) => {
    messageApi.open({
      type: "success",
      content: score,
    });
  };
  const handleInteractionEnd = () => {
    const { x, y } = currentArrow!;
    success(calculateScore(x, y, radius, ringCount));
  };
  return (
    <>
      <div
        ref={targetRef}
        className={styles.targetRing}
        id="arrow-container"
        style={{
          background: "transparent",
          cursor: "crosshair",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseUp={handleInteractionEnd}
        onTouchEnd={handleInteractionEnd}
      >
        {messageContextHolder}
        {arrows.map(({ x, y }, index) => (
          <Arrow
            key={index}
            x={x}
            y={y}
            score={calculateScore(x, y, radius, ringCount)}
          />
        ))}
        {currentArrow && (
          <Arrow
            x={currentArrow.x}
            y={currentArrow.y}
            score={calculateScore(
              currentArrow.x,
              currentArrow.y,
              radius,
              ringCount
            )}
          />
        )}
        {(currentArrow || arrows.length > 0) && (
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            {currentArrow && (
              <ArrowLine
                x={currentArrow.x}
                y={currentArrow.y}
                targetRadius={radius}
              />
            )}
            {arrows.map(({ x, y }, i) => (
              <ArrowLine key={i} x={x} y={y} targetRadius={radius} />
            ))}
          </svg>
        )}
      </div>
    </>
  );
};

export default Arrows;
