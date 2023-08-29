import { useState } from "react";
import "./App.css";
import ClinicalReport from "./components/ClinicalReport";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ClinicalReport />
    </>
  );
}

export default App;
