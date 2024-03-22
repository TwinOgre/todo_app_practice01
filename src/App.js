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
        setTodos([...todos, {id: todo.id, text: todo.text, checked: !todo.checked}])
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