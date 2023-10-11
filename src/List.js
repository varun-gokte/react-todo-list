import "./List.css";
import { useState } from "react";

function List(props) {
  const name = props.name;
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [checklist, setChecklist] = useState([]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const addNewItem = (event) => {
    event.preventDefault();
    setList((prevList) => [...prevList, item]);
    setChecklist((prevList) => [...prevList, false]);
    setItem("");
  };

  const itemCompleted = (index) => {
    setChecklist((prevList) => {
      prevList[index] = true;
      return [...prevList];
    });
    setChecklist((prevList) => [...prevList]);
  };

  const itemDeCompleted = (index) => {
    setChecklist((prevList) => {
      if (prevList[index] === true) prevList[index] = false;
      return prevList;
    });
    setList((prevList) => [...prevList]);
  };

  return (
    <div>
      <h1 id="heading">Your To-do List: {name}</h1>
      <div id="content">
        <ul>
          {list.map((listItem, index) => {
            if (checklist[index] === false) {
              return (
                <div className="incomItem">
                  <input
                    type="checkbox"
                    checked={checklist[index]}
                    onClick={() => itemCompleted(index)}
                  />
                  {listItem}
                </div>
              );
            }
          })}
        </ul>
        <br />
        <form onSubmit={addNewItem} id="itemForm">
          <input
            type="text"
            name="newItem"
            value={item}
            onChange={handleChange}
            id="newItem"
          />
          <button type="submit">Add an item</button>
        </form>
        <br />
        <h3 id="comHeading">Completed</h3>
        <ul>
          {list.map((listItem, index) => {
            if (checklist[index] === true) {
              return (
                <div className="comItem">
                  <input
                    type="checkbox"
                    checked={checklist[index]}
                    onChange={() => itemDeCompleted(index)}
                  />
                  {listItem}
                </div>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default List;
