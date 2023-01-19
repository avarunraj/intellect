import { FC } from "react";
import styled from "@emotion/styled";
import {
  TriangleStatusBarInputItemType,
  TriangleStatusBarInputType,
  TriangleStatusBarType,
} from "./Common/CommonTypes";

const ProgressBarWrapper = styled.div<TriangleStatusBarInputType>`
  width: ${(props) => props.svgSize}px;
  height: ${(props) => props.svgSize}px;
  background: #2b5c6e;
  padding: 1rem;
  margin: 1rem;
  .progress-bar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProgressBarItem = styled.div<TriangleStatusBarInputItemType>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height / 10}px;
  background: #7d9da8;
  margin-bottom: 0.5rem;
  border-radius: 8px 8px 15px 15px;
`;

export const TriangleStatusBar: FC<TriangleStatusBarType> = ({
  widgetSize,
}) => {
  return (
    <ProgressBarWrapper svgSize={widgetSize}>
      <div className="progress-bar-container">
        <ProgressBarItem width={widgetSize} height={widgetSize} />
        <ProgressBarItem width={widgetSize * 0.68} height={widgetSize} />
        <ProgressBarItem width={widgetSize * 0.44} height={widgetSize} />
        <ProgressBarItem width={widgetSize * 0.22} height={widgetSize} />
        <ProgressBarItem width={widgetSize * 0.11} height={widgetSize} />
      </div>
    </ProgressBarWrapper>
  );
};
