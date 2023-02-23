import React from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import data from "./data.json";

const DraggableBox = ({ id, item }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <span
        id={id}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          margin: "50px",
          border: "5px solid yellow",
          display: "inline-block",
          borderRadius: "10px"
        }}
      >
        {item}
      </span>
    </Draggable>
  );
};

export function V2Example() {
  return (
    <div>
      <Xwrapper>
        {data.map((item, index) => (
          <DraggableBox id={"elem" + index} item={item} />
        ))}
        {/* <Xarrow start={"elem" + 0} end={"elem" + 1} />
        <Xarrow start={"elem" + 1} end={"elem" + 2} />
        <Xarrow start={"elem" + 2} end={"elem" + 3} /> */}
        {data.map(
          (item, index) =>
            index <= data.length - 2 && (
              <Xarrow
                lineColor="green"
                headColor="green"
                start={"elem" + index}
                end={"elem" + (index + 1)}
              />
            )
        )}
      </Xwrapper>
    </div>
  );
}
