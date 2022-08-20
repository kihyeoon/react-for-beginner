import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; // 투두가 비어있으면 여기서 함수를 종료시킴
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>To Do List ({toDos.length})</h1>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your ToDo"
        ></input>
        <button>Add ToDo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
