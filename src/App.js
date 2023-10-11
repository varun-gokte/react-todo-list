import List from "./List";
import { useState } from "react";

function App() {
  const [lists, setLists] = useState([<List name="Default" />]);
  const [names, setNames] = useState(["Default"]);
  const [displayedList, setDisplayedList] = useState(0);
  const [dispVals, setDispVals] = useState([true]);

  const newList = () => {
    const name = prompt("Enter the new list name");
    setLists((prevLists) => [...prevLists, <List name={name} />]);
    setNames((prevNames) => [...prevNames, name]);
    setDispVals((prevDispVals) => [...prevDispVals, false]);
  };

  const selectList = (listName) => {
    const num = names.indexOf(listName);
    var t = [];
    for (var i = 0; i < dispVals.length; i++) {
      if (i === num) t[i] = true;
      else t[i] = false;
    }
    setDispVals(t);
    renderList();
  };

  const renderList = () => {};

  return (
    <div id="list-create">
      <div>
        <button onClick={newList}>Create New List</button>
        <h3>Select List</h3>
        {names.map((name) => {
          return <button onClick={() => selectList(name)}>{name}</button>;
        })}
      </div>
      {lists.map((list, index) => {
        return dispVals[index] ? list : null;
      })}
    </div>
  );
}

export default App;
