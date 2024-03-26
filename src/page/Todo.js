import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Todo() {
    let { id } = useParams();
    const fetchString = "https://dummyjson.com/todos/" + id;
    const [todo, setTodo] =  useState([]);

    useEffect(() => {
        fetch(fetchString)
        .then(res => res.json())
        .then(data => setTodo(data));
    }, [])


    return (<div style={{ marginLeft: "50px" }}>
        <h1>Todo no.{todo.id}</h1>
        <h3>📃id: {todo.id}</h3>
        <h4>📌todo: {todo.todo}</h4>
        <h4> completed: {todo.completed ? "✅" : "❌"}</h4>
        <div>😎userId: {todo.userId}</div>
    </div>);
}

export default Todo;