import React from "react";
import { Link } from "react-router-dom";

const ItemList = () => {
  const itemlists = [
    { id: 1, title: "Item 1", description: "Description for Item 1" },
    { id: 2, title: "Item 2", description: "Description for Item 2" },
    { id: 3, title: "Item 3", description: "Description for Item 3" },
  ];
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {itemlists.map((itemlist) => (
          <li key={itemlist.id}>
            <Link to={`/items/${itemlist.id}`}>{itemlist.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
