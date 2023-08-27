import React, { useState } from "react";
import Nomal from "./Nomal";
import Edit from "./Edit";
import { toast } from "react-toastify";

const SingleItem = ({ item, removeItem, items, setItems, setLocalStorage }) => {
  const [ischecked, setIsChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const editItem = (itemId) => {
    if (item.id === itemId) {
      setIsEdit(true);
    }
  };

  const updateItem = (itemId, text) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        item.name = text;
        setIsEdit(false);
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item is updated to the list')
  };

  return (
    <div className="single-item">
      {isEdit ? (
        <Edit item={item} updateItem={updateItem} />
      ) : (
        <Nomal
          item={item}
          removeItem={removeItem}
          ischecked={ischecked}
          setIsChecked={setIsChecked}
          editItem={editItem}
        />
      )}
    </div>
  );
};

export default SingleItem;
