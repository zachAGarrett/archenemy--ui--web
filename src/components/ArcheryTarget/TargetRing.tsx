import { CSSProperties, FC } from "react";
import styles from "./ArcheryTarget.module.css";

interface TargetRing {
  color: CSSProperties["background"];
  startPosition?: number;
}

const TargetRing: FC<TargetRing> = ({ color, startPosition }: TargetRing) => {
  return (
    <div
      className={styles.targetRing}
      style={{
        background: color,
        ...(startPosition && {
          mask: `radial-gradient(transparent ${startPosition}px, #000 ${
            startPosition + 1
          }px)`,
        }),
      }}
    />
  );
};

export default TargetRing;
