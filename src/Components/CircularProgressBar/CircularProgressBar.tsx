import { FC, useState, ChangeEvent } from "react";
import styled from "@emotion/styled";
import { CircularSVG } from "./CircularSVG/CircularSVG";
import {
  CircularProgressBarPropsType,
  inputPropType,
} from "../Common/CommonTypesAndData";

const LinearProgress = styled.input<inputPropType>`
  margin: 20px auto;
  width: ${(props) => props.svgSize}px;
`;

const ProgressBarWrapper = styled.div<inputPropType>`
  width: ${(props) => props.svgSize}px;
  height: ${(props) => props.svgSize + 50}px;
  background: #2b5c6e;
  padding: 1rem;
`;

export const CircularProgressBar: FC<CircularProgressBarPropsType> = ({
  svgSize,
  progressCircleBarWidth,
}) => {
  // state related to percentage
  const [percentage, setPercentage] = useState(10);

  /**
   * handles changing percentage change
   * @param event : input change event
   */
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPercentage(Number(event.target.value));
  };

  return (
    <ProgressBarWrapper svgSize={svgSize}>
      <CircularSVG
        strokeWidth={progressCircleBarWidth}
        sqSize={svgSize}
        percentage={percentage}
      />
      <div>
        <LinearProgress
          svgSize={svgSize}
          type="range"
          min="0"
          max="10"
          step="1"
          value={percentage}
          onChange={handleInputChange}
        />
      </div>
    </ProgressBarWrapper>
  );
};
