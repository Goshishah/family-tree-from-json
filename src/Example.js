import React from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import data from "./data.json";
import { getData } from "./getTree";

const DraggableBox = ({ id, item }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <span
        id={id}
        style={{
          background:
            "radial-gradient(circle, rgba(2,76,12,1) 0%, rgba(4,119,2,1) 0%, rgba(0,62,16,1) 100%)",
          fontSize: "24px",
          color: "#fdce1f",
          padding: "20px",
          margin: "50px",
          border: "5px solid #fdce1f",
          display: "inline-block",
          // borderRadius: "10px",

          borderRadius: "50%"
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
        {/* <DraggableBox id={"elem-grand"} item={""} />
      <DraggableBox id={"elem-grand"} item={""} />
      <DraggableBox id={"elem-grand"} item={""} /> */}
        {data.map((item, index) => (
          <DraggableBox id={"elem" + index} item={item.replace("بن", "")} />
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
