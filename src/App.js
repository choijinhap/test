import { useState } from "react";
import Counter from "./components/Counter/Counter";
import Type from "./pages/OrderPage/Type";
import SummaryPage from "./pages/SummaryPage/SummaryPage";

function App() {
  return <Type orderType="products" />;
}

export default App;
