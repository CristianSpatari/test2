import "./App.css";
import getNames from "./api";
import { userName } from "./redux/usersReducer";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const store = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [names, setNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState(names);

  useEffect(() => {
    getNames().then(setNames);
  }, []);

  useEffect(() => {
    setFilteredNames(names);
  }, [names]);

  useEffect(() => {
    setFilteredNames(
      names.filter((value) => {
        if (store === "") return value;
        else if (value.toLocaleLowerCase().includes(store.toLocaleLowerCase()))
          return value;
      })
    );
  }, [store]);

  return (
    <div className="App">
      <input
        type={"text"}
        placeholder="Search for name...."
        onChange={(event) => {
          dispatch(userName(event.target.value));
        }}
      />
      {filteredNames.length === 0
        ? "Ooops... value not found"
        : filteredNames.map((element, index) => {
            return (
              <div className="users" key={index}>
                {element}
              </div>
            );
          })}
    </div>
  );
}

export default App;
