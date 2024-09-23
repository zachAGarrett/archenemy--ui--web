import { FC } from "react";
import TargetRing from "./TargetRing";
import Arrows from "./Arrows";

interface ArcheryTarget {
  radius: number;
  ringCount: number;
}

const ArcheryTarget: FC<ArcheryTarget> = ({ radius, ringCount }) => {
  return (
    <div
      className="archery-target-container"
      style={{ width: radius * 2, height: radius * 2, position: "relative" }}
    >
      <TargetRing color="yellow" />
      <TargetRing color="red" startPosition={50} />
      <TargetRing color="blue" startPosition={100} />
      <TargetRing color="black" startPosition={150} />
      <TargetRing color="white" startPosition={200} />
      <TargetRing color="black" startPosition={249} />

      <Arrows radius={radius} ringCount={ringCount} />
    </div>
  );
};

export default ArcheryTarget;
