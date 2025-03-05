import { useState } from "react";
import "./style.css";


export default function App() {
    const [newItem, setNewItem]=useState("")


  return (
    <>
      <form classname="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
           value={newItem}
           onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item" />
          <button className="btn">Add</button>
        </div>
      </form>
        <h1 className="header">Todo List</h1>
        <ul className="list">
            <li>
                <label>
                    Item 1
                    <input type="checkbox" />
                </label>
                <button className="btn btn-danger">Delete</button>
            </li>
            <li>
                <label>
                    Item 2
                    <input type="checkbox" />
                </label>
                <button className="btn btn-danger">Delete</button>
            </li>
            <li>
                <label>
                    Item 3
                    <input type="checkbox" />
                </label>
                <button className="btn btn-danger">Delete</button>
            </li>
        </ul>
    </>
  );
}
