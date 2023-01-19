import { FC, useState } from "react";
import { CircularProgressBar } from "../CircularProgressBar/CircularProgressBar";
import styled from "@emotion/styled";

const LinearProgress = styled.input`
  margin: 20px auto;
  width: 30%;
`;



export const ProgressBarCommon: FC = () => {
  const [percentage, setPercentage] = useState(10);

  const handleChangeEvent = (e: any) => {
    setPercentage(e.target.value);
  };
  return (
    <div>
      <CircularProgressBar
        strokeWidth={5}
        sqSize={200}
        percentage={percentage}
      />
      <div>
        <LinearProgress
          type="range"
          min="0"
          max="10"
          step="1"
          value={percentage}
          onChange={handleChangeEvent}
        />
      </div>
    </div>
  );
};
