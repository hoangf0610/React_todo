import React, { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const App = () => {
  const [items, setItems] = useState(defaultList);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added to the list");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item removed");
  };

  const removeAll = () => {
    const count = items.map((item) => item);
    if (count.length === 0) {
      toast.error("List is emptying");
    } else {
      const newItems = [];
      setItems(newItems);
      setLocalStorage(newItems);
      toast.success("Removed all items");
    }
  };

  const removeChecked = () => {
    const newItems = items.filter((item) => item.completed === false);
    const itemCheck = items.filter((item) => item.completed !== false);
    if (itemCheck.length === 0) {
      toast.error("Please chose items");
    } else {
      setItems(newItems);
      setLocalStorage(newItems);
      toast.success("Removed items are checked");
    }
  };

  return (
    <main className="section-center">
      <ToastContainer position="top-right" />
      <Form addItem={addItem} />
      <Items
        items={items}
        removeItem={removeItem}
        removeChecked={removeChecked}
        removeAll={removeAll}
        setItems={setItems}
        setLocalStorage={setLocalStorage}
      />
    </main>
  );
};

export default App;
