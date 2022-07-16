import { Route, Routes } from "react-router-dom";
import Button from "./components/Button";
function App() {
  const buttonOnclick = () => {
    console.log("버튼클릭");
  };
  return (
    <>
      <Button onClick={buttonOnclick} text="버튼" />
    </>
  );
}

export default App;
