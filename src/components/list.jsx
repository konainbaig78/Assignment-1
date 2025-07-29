import React from "react";
import "./list.css";

const List = () => {
  const listItems = ["Boil water", "Add tea leaves", "Strain and serve"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          border: "1px solid white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          backgroundColor: "#CCDDD3",
          borderRadius: "10px",
        }}
      >
        <h2>List items</h2>
        <ul className="list">
          {listItems.map((item, index) => (
            <li key={index} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
