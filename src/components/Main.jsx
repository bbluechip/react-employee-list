import "../sass/Main.scss";
import Cards from "./Cards";
import data from "../data/data";
import { useState } from "react";

const Main = () => {
  const [i, setI] = useState(0);
  const first = [...data.slice(0, 5)];
  const second = [...data.slice(5, 10)];
  const third = [...data.slice(10, 15)];
  const fourth = [...data.slice(15, 20)];
  const iteration = [first, second, third, fourth];

  const next = () => {
    console.log(i);
    if (i < 3) {
      setI(i + 1);
    } else {
      setI(0);
    }
  };
  const prev = () => {
    console.log(i);
    if (i > 0) setI(i - 1);
    else {
      setI(3);
    }
  };
  return (
    <div className="mainDiv">
      <h2>EMPLOYEE LIST</h2>
      <h4>Employees</h4>
      {iteration[i].map((i) => {
        return (
          <Cards
            id={i.id}
            name={i.name}
            age={i.age}
            image={i.image}
            email={i.email}
          />
        );
      })}
      <div className="buttonDiv">
        <button onClick={prev} className="button">
          PREV
        </button>
        <button onClick={next} className="button">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Main;
