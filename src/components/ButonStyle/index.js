import React from "react";
import "./button.css";

export function ButtonS1({ text, style }) {
  return (
    <div className="bts1" style={style}>
      <p> {text}</p>
    </div>
  );
}
