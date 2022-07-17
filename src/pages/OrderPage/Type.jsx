import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "./Products";

const Type = (props) => {
  const { orderType } = props;
  const [items, setItems] = useState(null);
  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);
  const loadItems = async (orderType) => {
    try {
      const res = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

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
