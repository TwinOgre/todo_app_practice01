function Item({todo ,onChecked}) {
    return ( <>
        <li key={todo.id}>
            <input type="checkbox" checked={todo.checked} onClick={() => onChecked(todo.id)}/>
            {todo.id} /
            {todo.text}
            <button>삭제</button>
        </li>
    </> );
}

export default Item;