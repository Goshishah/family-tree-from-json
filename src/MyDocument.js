import React from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import data from "./data.json";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const DraggableBox = ({ id, item }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <View
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
          borderRadius: "50%",
        }}
      >
        <Text>{item}</Text>
      </View>
    </Draggable>
  );
};

export function MyDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Xwrapper>
          {data.map((item, index) => (
            <DraggableBox id={"elem" + index} item={item.replace("بن", "")} />
          ))}
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
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
