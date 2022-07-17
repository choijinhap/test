import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorBanner from "../../components/ErrorBanner";
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

  const ItemComponents = orderType === "products" ? Products : null;
  const optionItems =
    items &&
    items.map((item) => (
      <ItemComponents
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    ));
  return <div>{optionItems}</div>;
};

export default Type;
