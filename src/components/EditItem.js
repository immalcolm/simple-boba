import React from "react";

export default function EditItem(props) {
  return (
    <React.Fragment>
      <div className="item-info">
        <h2>Edit Item</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="editedItemName"
            value={props.name}
            onChange={props.update}
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="text"
            name="editedItemPrice"
            value={props.price}
            onChange={props.update}
          />
        </div>
        <div>
          <label>Sugar:</label>
          <input
            type="text"
            name="editedItemSugar"
            value={props.sugar}
            onChange={props.update}
          />
        </div>
        <button
          onClick={() => {
            props.confirmUpdate(props.index);
          }}
        >
          Update
        </button>
        <button onClick={props.cancelUpdate}>Cancel</button>
      </div>
    </React.Fragment>
  );
}
