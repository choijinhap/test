import React from "react";

const Options = (props) => {
  const { name } = props;
  return (
    <form>
      <input type="checkbox" id={`${name} option`} />
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};

export default Options;
