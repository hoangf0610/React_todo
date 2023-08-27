import React, { useState } from "react";
import {toast} from 'react-toastify'

const Form = ({ addItem }) => {
  const [newNameItem, setNewNameItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newNameItem) {
      toast.error("Please provide value");
      return;
    }
    addItem(newNameItem);
    setNewNameItem('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newNameItem}
          onChange={(e) => setNewNameItem(e.target.value)}
        />
        <button className="btn" type="submit">
          Add item
        </button>
      </div>
    </form>
  );
};

export default Form;
