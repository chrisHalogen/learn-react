import React from "react";
import "./listCss.css";

const ListElement = () => {
  const myitems = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const data = [
    { id: 1, text: "item 1" },
    { id: 2, text: "item 2" },
    { id: 3, text: "item 3" },
    { id: 4, text: "item 4" },
  ];
  return (
    <ul className="list-container">
      {myitems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListElement;
