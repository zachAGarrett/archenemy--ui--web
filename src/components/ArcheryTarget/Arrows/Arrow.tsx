import { FC } from "react";
import { theme, Tooltip } from "antd";

const { useToken } = theme;

interface Arrow {
  x: number;
  y: number;
  score: number;
}

const Arrow: FC<Arrow> = ({ x, y, score }) => {
  const { token } = useToken();
  return (
    <Tooltip title={`Score: ${score}`}>
      <div
        className="arrow"
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: token.sizeSM,
          height: token.sizeSM,
          borderRadius: "50%",
          backgroundColor: token.colorSuccess,
          transform: "translate(-50%, -50%)",
        }}
      />
    </Tooltip>
  );
};

export default Arrow;
