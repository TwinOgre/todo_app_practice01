function Item({todo ,onChecked, onDelete}) {
    return ( <>
        <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => onChecked(todo.id)}/>
            {todo.id} /
            {todo.todo}
            <button onClick={() => onDelete(todo.id)}>삭제</button>
        </li>
    </> );
}

export default Item;