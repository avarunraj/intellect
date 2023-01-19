import { FC } from "react";
import styled from "@emotion/styled";
import { inputPropType } from "../CircularProgressBar/Common/CommonTypesAndData";
import {
  TriangleStatusBarInputType,
  TriangleStatusBarType,
} from "./Common/CommonTypes";

const ProgressBarWrapper = styled.div<TriangleStatusBarInputType>`
  width: ${(props) => props.svgSize}px;
  height: ${(props) => props.svgSize + 50}px;
  background: #2b5c6e;
  padding: 1rem;
  margin: 1rem;
`;

export const TriangleStatusBar: FC<TriangleStatusBarType> = ({
  widgetSize,
}) => {
  const viewBox = `0 0 ${widgetSize} ${widgetSize}`;
  return (
    <ProgressBarWrapper svgSize={widgetSize}>
      <svg width={widgetSize} height={widgetSize} viewBox={viewBox}></svg>
    </ProgressBarWrapper>
  );
};
