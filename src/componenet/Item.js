function Item({todo ,onChecked}) {
    return ( <>
        <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => onChecked(todo.id)}/>
            {todo.id} /
            {todo.todo}
            <button>삭제</button>
        </li>
    </> );
}

export default Item;