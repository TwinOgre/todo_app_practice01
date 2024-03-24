import { useEffect, useState } from "react";
import Nav from "./componenet/Nav";
import Input from "./componenet/Input";
import List from "./componenet/List";
function App() {
  const [todos, setTodos] = useState([]);
  
useEffect(()=> {
fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then(data => setTodos(data.todos));
}, [])

  
  
  const [text, setText] = useState('');
  const [lastId, setLastId] = useState(31);

  const onInput = (e) => {
    e.preventDefault();
    console.log(e)
    setTodos([...todos, {id: lastId, todo: text, completed: false}])
    setLastId(lastId+1);
  }

  const textChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value)
  }
  const onChecked = (id) => {
    const checkedTodos = todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    setTodos(checkedTodos)
  }
  const onDelete = (id) => {
    const deletedTodos = todos.filter(todo => todo.id !== id)
    setTodos(deletedTodos)
  }

  return (
    <div className="App">
      <Nav />
      <Input onInput={onInput} textChange={textChange}/>
      <List todos={todos} onChecked={onChecked} onDelete={onDelete}/>
    </div>
  );
}

export default App;