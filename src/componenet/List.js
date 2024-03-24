import Item from "./Item";
function List({todos, onChecked, onDelete}) {
    return ( <ul>
        {todos.map(todo => <Item todo={todo} onChecked={onChecked} onDelete={onDelete}/>)}
    </ul> );
}

export default List;