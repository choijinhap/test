import { useState } from "react";
import Counter from "./components/Counter/Counter";
import OrderPage from "./pages/OrderPage/OrderPage";
import Type from "./pages/OrderPage/Type";
import SummaryPage from "./pages/SummaryPage/SummaryPage";

function App() {
  return (
    <div style={{ padding: "4rem" }}>
      <OrderPage />
    </div>
  );
}

export default App;
