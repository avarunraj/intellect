import { FC } from "react";
import styled from "@emotion/styled";

type CircularProgressBarType = {
  sqSize: number;
  percentage: number;
  strokeWidth: number;
};
const CircleBackground = styled.circle`
  stroke: #648e95;
  fill: #4de1e8;
  paint-order: stroke;
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
const CircleText = styled.text`
  font-size: 2rem;
  font-weight: bold;
  fill: white;
`;

export const CircularProgressBar: FC<CircularProgressBarType> = ({
  sqSize,
  percentage,
  strokeWidth,
}) => {
  // sqSize is the Size of the enclosing square
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 10;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <CircleBackground
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius / 1.5}
        // strokeWidth={`${strokeWidth}px`}
        strokeWidth={radius / 1.7}
      />
      <CircleProgress
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <CircleText x="50%" y="50%" dy=".3em" textAnchor="middle">
        {percentage}
      </CircleText>
    </svg>
  );
};