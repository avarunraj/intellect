import { FC, useState } from "react";
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
    .triangle {
      position: relative;
      text-align: left;
      margin-right: 5px;
    }
    .triangle:before,
    .triangle:after {
      content: "";
      position: absolute;
      background-color: inherit;
    }
    .triangle,
    .triangle:before,
    .triangle:after {
      width: 15px;
      height: 15px;
      border-top-right-radius: 55%;
    }

    .triangle {
      transform: rotate(240deg) skewX(-30deg) scale(1, 0.866);
    }
    .triangle:before {
      transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
        translate(0, -50%);
    }
    .triangle:after {
      transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
    }
  }
`;

const ProgressBarItem = styled.div<TriangleStatusBarInputItemType>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height / 8}px;
  background: ${(props) => (props.isChecked ? " #fff" : "#7d9da8")};
  margin-bottom: 0.5rem;
  cursor: pointer;
  border-radius: 15px 15px 10px 10px;
  &:hover {
    background: #fff;
  }
`;

const ProgressBarItem2 = styled.div<TriangleStatusBarInputItemType>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height / 8}px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  background: ${(props) => (props.isChecked ? " #fff" : "#7d9da8")};
  border-radius: 15px 15px 6px 6px;
  &:hover {
    background: #fff;
  }
`;

const ProgressBarTriangle = styled.div<TriangleStatusBarInputItemType>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height / 8}px;
  background: ${(props) => (props.isChecked ? " #fff" : "#7d9da8")};
  cursor: pointer;
  margin-bottom: 0.5rem;
  &:hover {
    background: #fff;
  }
`;

export const TriangleStatusBar: FC<TriangleStatusBarType> = ({
  widgetSize,
}) => {
  const initialStatusArray = [
    { id: 0, checkedStatus: false },
    { id: 1, checkedStatus: false },
    { id: 2, checkedStatus: false },
    { id: 3, checkedStatus: false },
    { id: 4, checkedStatus: false },
  ];

  const [checkedStatusArray, SetCheckedStatusArray] =
    useState(initialStatusArray);

  const handleOnClick = (id: number) => {
    let tempStatusCheckedArray = [...checkedStatusArray];
    tempStatusCheckedArray = tempStatusCheckedArray.map((item) => {
      if (id <= item.id) {
        item.checkedStatus = true;
      } else {
        item.checkedStatus = false;
      }

      return item;
    });
    SetCheckedStatusArray(tempStatusCheckedArray);
  };
  return (
    <ProgressBarWrapper svgSize={widgetSize}>
      <div className="progress-bar-container">
        <ProgressBarItem
          width={widgetSize}
          height={widgetSize}
          isChecked={checkedStatusArray[0].checkedStatus}
          onClick={() => {
            handleOnClick(0);
          }}
        />
        <ProgressBarItem
          width={widgetSize * 0.68}
          height={widgetSize}
          isChecked={checkedStatusArray[1].checkedStatus}
          onClick={() => {
            handleOnClick(1);
          }}
        />
        <ProgressBarItem
          width={widgetSize * 0.44}
          height={widgetSize}
          isChecked={checkedStatusArray[2].checkedStatus}
          onClick={() => {
            handleOnClick(2);
          }}
        />
        <ProgressBarItem2
          width={widgetSize * 0.22}
          height={widgetSize}
          isChecked={checkedStatusArray[3].checkedStatus}
          onClick={() => {
            handleOnClick(3);
          }}
        />
        <ProgressBarTriangle
          width={widgetSize * 0.11}
          height={widgetSize}
          isChecked={checkedStatusArray[4].checkedStatus}
          onClick={() => {
            handleOnClick(4);
          }}
          className="triangle"
        />
      </div>
    </ProgressBarWrapper>
  );
};
