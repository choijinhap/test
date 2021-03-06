import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorBanner from "../../components/ErrorBanner";
import Options from "./Options";
import Products from "./Products";

const Type = (props) => {
  const { orderType } = props;
  const [items, setItems] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);
  const loadItems = async (orderType) => {
    try {
      const res = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(res.data);
    } catch (err) {
      setError(true);
    }
  };

  if (error) return <ErrorBanner message="에러가 발생했습니다." />;

  const ItemComponents = orderType === "products" ? Products : Options;
  const optionItems =
    items &&
    items.map((item) => (
      <ItemComponents
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    ));
  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격</p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" && "column",
        }}
      >
        {" "}
        {optionItems}
      </div>
    </>
  );
};

export default Type;
