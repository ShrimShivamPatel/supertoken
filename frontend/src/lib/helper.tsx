import React from "react";
import { useLocation } from "react-router-dom";

const Helper = () => {
  const location = useLocation();

  console.log(JSON.stringify(location, null, 4));

  return <></>;
};

export default Helper;
