import { FC } from "react";
import styled from "@emotion/styled";
import {
  CircularSVGPropsType,
  inputPropType,
} from "../../../Common/types";

const CircleBackground = styled.circle`
  stroke: #406d7d;
  fill: #4de1e8;
  paint-order: stroke;
`;

const CircleDash = styled.circle`
  stroke-width: 5;
  stroke-dasharray: 9;
  fill: none;
  stroke: #558396;
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
const CircleText = styled.text<inputPropType>`
  font-size: ${(props) => props.svgSize / 100}em;
  font-weight: bold;
  fill: white;
`;

export const CircularSVG: FC<CircularSVGPropsType> = ({
  sqSize,
  percentage,
  strokeWidth,
}) => {
  // sqSize is the Size of the enclosing square
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference and radius/1.25 is the radius of circleProgress
  const dashArray = (radius / 1.25) * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 10;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <CircleDash
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={radius / 1.7}
        id={"dashed-circle"}
      />
      <CircleBackground
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius / 2}
        strokeWidth={radius / 1.7}
      />
      <CircleProgress
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius / 1.25}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
        id={"progress-circle"}
      />
      <CircleText
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        svgSize={sqSize}
        id={"progress-text"}
      >
        {percentage}
      </CircleText>
    </svg>
  );
};
