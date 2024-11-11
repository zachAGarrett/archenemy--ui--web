import { theme } from "antd";
import { FC } from "react";

const { useToken } = theme;

interface ArrowLine {
  x: number;
  y: number;
  targetRadius: number;
}
const ArrowLine: FC<ArrowLine> = ({ x, y, targetRadius }) => {
  const { token } = useToken();

  return (
    <line
      x1={x}
      y1={y}
      x2={targetRadius}
      y2={targetRadius}
      style={{
        stroke: token.colorPrimary,
        strokeWidth: token.controlOutlineWidth,
      }}
    />
  );
};

export default ArrowLine;
