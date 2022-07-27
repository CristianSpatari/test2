import "./App.css";
import getNames from "./api";
import { userName } from "./redux/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const store = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [names, setNames] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getNames().then(setNames);
  }, []);
  return (
    <div className="App">
      <input
        type={"text"}
        placeholder="Search for name...."
        onChange={(event) => {
          dispatch(userName(event.target.value));
        }}
      />

      {names
        .filter((value) => {
          if (store === "") return value;
          else if (
            value.toLocaleLowerCase().includes(store.toLocaleLowerCase())
          )
            return value;
        })
        .map((element, index) => {
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
