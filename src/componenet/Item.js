import { Link } from "react-router-dom";
function Item({todo ,onChecked, onDelete}) {
    const todoLink = "/todos/" + todo.id
    return ( <>
        
        <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => onChecked(todo.id)}/>
            {todo.id} /
            <Link to={todoLink}>{todo.todo}</Link>
            <button onClick={() => onDelete(todo.id)}>삭제</button>
        </li>
    </> );
}

export default Item;