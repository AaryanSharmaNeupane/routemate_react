import React from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <>
      <div>contact</div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
