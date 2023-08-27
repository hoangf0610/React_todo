import React from 'react'

const Nomal = ({item, removeItem, editItem, ischecked, setIsChecked}) => {
  return (
    <div className="edit-item">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            (item.completed = !item.completed), setIsChecked(!ischecked);
          }}
        />
        <p
          className="p-item"
          style={{
            textTransform: "capitalize",
            textDecoration: item.completed && "line-through",
          }}
        >
          {item.name}
        </p>
        <button
          type="button"
          className="btn edit-btn"
          onClick={() => editItem(item.id)}
        >
          edit
        </button>
        <button
          type="button"
          className="btn remove-btn"
          onClick={() => removeItem(item.id)}
        >
          delete
        </button>
      </div>
  )
}

export default Nomal