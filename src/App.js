import "./styles.css";
import { MyDocument, MyDocument1 } from "./MyDocument";
import { MyTree } from "./MyTree";
import { Document, Page, usePDF } from "@react-pdf/renderer";

export default function App() {
  return (
    <>
      <Download />
      <MyTree />
    </>
  );
}

const MyDoc = (
  <Document>
    <Page>// My document data</Page>
  </Document>
);

const Download = () => {
  // const [instance, updateInstance] = usePDF({ document: MyDocument });
  const [instance, updateInstance] = usePDF({ document: MyDoc });

  if (instance.loading) return <div>Loading ...</div>;

  if (instance.error) return <div>Something went wrong: {error}</div>;

  return (
    <button>
      <a href={instance.url} download="test.pdf">
        Download
      </a>
    </button>
  );
};
