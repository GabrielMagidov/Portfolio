import React from "react";
import "./TabButton.css";

export default function TabButton(props) {
  return (
    <li>
      <button
        className={props.isSelected ? "tab-button active" : "tab-button"}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
  );
}
