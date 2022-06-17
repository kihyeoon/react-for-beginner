import Button from "../Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const handleShowing = () => setShowing((prev) => !prev);
  function Hello() {
    useEffect(() => {
      console.log("created:)");
      return () => {
        console.log("destroyed:(");
      };
    }, []);
    return <h1>Hello</h1>;
  }
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  //console.log("i run every time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(iRunOnlyOnce, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 2) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div className="App">
      <button onClick={handleShowing}>{showing ? "Hide" : "Show"}</button>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      ></input>
      {showing ? <Hello /> : null}
      <h1 className={styles.title}>{counter} Welcome back!!!</h1>
      <Button text={"Counter"} onClick={onClick} />
    </div>
  );
}

export default App;
