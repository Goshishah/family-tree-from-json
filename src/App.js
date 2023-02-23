import "./styles.css";
import data from "./data.json";
import Xarrow from "react-xarrows";
import { useRef } from "react";
import { V2Example } from "./Example";
const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "10px",
  margin: "50px"
};
export default function App() {
  // const box1Ref = useRef(null);
  //   return (
  //       <div>
  //           <div ref={box1Ref} style={boxStyle}>hey</div>
  //           <p id="elem2" style={boxStyle}>hey2</p>
  //           <Xarrow
  //               start={box1Ref} //can be react ref
  //               end="elem2" //or an id
  //           />
  //       </div>
  //   );

  return <V2Example />;
}
