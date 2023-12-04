import { FC, useState, ChangeEvent } from "react";
import styled from "@emotion/styled";
import { CircularSVG } from "./CircularSVG";
import {
  CircularProgressBarPropsType,
  inputPropType,
} from "../../Common/types";

const LinearProgress = styled.input<inputPropType>`
  margin: 20px auto;
  width: ${(props) => props.svgSize}px;
`;

const ProgressBarWrapper = styled.div<inputPropType>`
  width: ${(props) => props.svgSize}px;
  height: ${(props) => props.svgSize + 50}px;
  background: #2b5c6e;
  padding: 1rem;
  margin: 1rem;

  input[type="range"] {
    -webkit-appearance: none;
    background-color: #4de1e8;
    width: ${(props) => props.svgSize}px;
    height: ${(props) => props.svgSize / 20}px;
    border-radius: ${(props) => props.svgSize * 0.1}px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #4de1e8;
    width: ${(props) => props.svgSize * 0.1}px;
    height: ${(props) => props.svgSize * 0.1}px;
    border-radius: 100%;
    border: 2px solid #fff;
  }
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
          id={"input-slider"}
        />
      </div>
    </ProgressBarWrapper>
  );
};
