import React from "react";
import { useParams, useLocation } from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams();
  const location = useLocation();

  console.log(location);
  return (
    <div>
      Product Detail-
      {params.id} -{params.name}
    </div>
  );
};
