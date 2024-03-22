import { useState } from "react";
import Nav from "./componenet/Nav";
import Input from "./componenet/Input";
import List from "./componenet/List";
function App() {
  const initialTodos = [
    {id: 1, text: "할일 A", checked: false},
    {id: 2, text: "할일 B", checked: false},
    {id: 3, text: "할일 C", checked: false}
  ];
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState('');
  const [lastId, setLastId] = useState(4);
  const onInput = (e) => {
    e.preventDefault();
    console.log(e)
    setTodos([...todos, {id: lastId, text: text, checked: false}])
    setLastId(lastId+1);
  }

  const textChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value)
  }
  const onChecked = (id) => {
    console.log(id);
    const checkedList = todos.map((todo) => {
      if(id == todo.id){
        setTodos([...todos, { checked: !todo.checked}])
      }
    })
  }

  return (
    <div className="App">
      <Nav />
      <Input onInput={onInput} textChange={textChange}/>
      <List todos={todos} onChecked={onChecked}/>
    </div>
  );
}

export default App;