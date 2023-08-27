import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, removeChecked, removeAll, setItems, setLocalStorage }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            items={items}
            removeItem={removeItem}
            item={item}
            setItems={setItems}
            setLocalStorage={setLocalStorage}
          />
        );
      })}
      <div className="btn-gird">
        <button className="btn del-btn" onClick={() => removeChecked()}>
          Delete checked
        </button>
        <button className="btn del-btn" onClick={() => removeAll()}>
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Items;
