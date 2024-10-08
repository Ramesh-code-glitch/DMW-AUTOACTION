"use client";
import React from "react";

const Button = ({
  width = "",
  height = "",
  color = "",
  lineheight= "",
  fontSize = "",
  fontweight= "",
  cursor = "",
  text = "",
  textalign= "",
  background = "",


  display = "flex",
  event = () => { },
}) => {
  return (
    <button
      type="submit"
      className="Supplier"
      style={{
        width: width,
        height: height,
        color: color,
        cursor: cursor,
        fontSize: fontSize,
        background: background,
        text: text, 
        display: display,
        fontweight: fontweight,
        lineheight: lineheight,
        textalign: textalign,
       
      }}
      onClick={event}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;