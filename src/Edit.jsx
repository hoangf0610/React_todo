import React, { useState } from "react";


const Edit = ({ item, updateItem, editedItem }) => {
  const [text, setText] = useState("");

  const handleSetText = (e) => {
    setText(e.target.value)
  }
  return (
    <div className="edit-textarea">
      <textarea
        name="edit"
        rows="2"
        value={text}
        onChange={handleSetText}
      ></textarea>
      <button
        type="button"
        className="btn update-btn"
        onClick={() => updateItem(item.id, text)}
      >
        update
      </button>
    </div>
  );
};

export default Edit;
