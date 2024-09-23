export const calculateScore = (
  x: number,
  y: number,
  targetRadius: number,
  ringCount: number
): number => {
  const offset = Math.sqrt(
    Math.pow(x - targetRadius, 2) + Math.pow(y - targetRadius, 2)
  );
  const radiusPerRing = targetRadius / ringCount;

  return ringCount - Math.floor(offset / radiusPerRing);
};
