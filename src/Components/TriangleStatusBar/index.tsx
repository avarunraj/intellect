import { FC, useState } from "react";
import styled from "@emotion/styled";
import {
  TriangleStatusBarInputItemType,
  TriangleStatusBarInputType,
  TriangleStatusBarType,
} from "./Common/CommonTypes";

const ProgressBarWrapper = styled.div<TriangleStatusBarInputType>`
  width: ${(props) => props.svgSize}px;
  height: ${(props) => props.svgSize + props.svgSize / 4}px;
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
      width: ${(props) => props.svgSize * 0.0681}px;
      height: ${(props) => props.svgSize * 0.0681}px;
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

const TextWrapper = styled.div<TriangleStatusBarInputType>`
  width: ${(props) => props.svgSize}px;
  height: ${(props) => props.svgSize / 8}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
  color: #fff;
  font-size: ${(props) => props.svgSize / 150}em;
`;

const ProgressBarItem = styled.div<TriangleStatusBarInputItemType>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height / 8}px;
  background: ${(props) => (props.isChecked ? " #fff" : "#7d9da8")};
  margin-bottom: 0.5rem;
  cursor: pointer;
  border-radius: 15px 15px 10px 10px;
  transform: rotate(180deg);
  border-top-right-radius: 20px 30px;
  border-top-left-radius: 20px 30px;
  &:hover {
    background: #fff;
  }
`;

const TrapezoidItem = styled.div<TriangleStatusBarInputItemType>`
  transform: rotate(180deg);
  border-bottom: ${(props) => props.height / 8}px solid
    ${(props) => (props.isChecked ? " #fff" : "#7d9da8")};
  border-left: ${(props) => props.height * 0.068}px solid transparent;
  border-right: ${(props) => props.height * 0.068}px solid transparent;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  height: 0;
  width: ${(props) => props.width}px;
  &:hover {
    border-bottom: ${(props) => props.height / 8}px solid #fff;
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
  // state to handle checkedStatus
  const initialStatusArray = [
    { id: 0, checkedStatus: false },
    { id: 1, checkedStatus: false },
    { id: 2, checkedStatus: false },
    { id: 3, checkedStatus: false },
    { id: 4, checkedStatus: true },
  ];

  //states
  const [checkedStatusArray, SetCheckedStatusArray] =
    useState(initialStatusArray);
  const [selectedItemId, setSelectedItemId] = useState(4);

  /**
   * handles changing checked status
   * @param id : id of the clicked item
   * for items with id less than clicked item id , selected status is changed to true
   */
  const handleOnClick = (id: number) => {
    let tempStatusCheckedArray = [...checkedStatusArray];
    setSelectedItemId(id);
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

  /**
   * returns status text based on selected range
   * if max selected item id is less than 2 then 'High' otherwise 'Low'
   * if max selected item id is 2 , then 'Medium'
   */
  const handleStatusText = () => {
    let statusText = "";
    if (selectedItemId === 2) {
      return "Medium";
    }
    selectedItemId < 2 ? (statusText = "High") : (statusText = "Low");
    return statusText;
  };

  return (
    <ProgressBarWrapper svgSize={widgetSize}>
      <TextWrapper svgSize={widgetSize} id={"level-text"}>
        {handleStatusText()}
      </TextWrapper>
      <div className="progress-bar-container" id="progress-bars">
        <ProgressBarItem
          width={widgetSize * 0.78}
          height={widgetSize}
          isChecked={checkedStatusArray[0].checkedStatus}
          onClick={() => {
            handleOnClick(0);
          }}
        />
        <ProgressBarItem
          width={widgetSize * 0.613}
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
        <TrapezoidItem
          width={widgetSize * 0.183}
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
