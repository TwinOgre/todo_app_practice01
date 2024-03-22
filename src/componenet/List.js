import Item from "./Item";
function List({todos, onChecked}) {
    return ( <ul>
        {todos.map(todo => <Item todo={todo} onChecked={onChecked}/>)}
    </ul> );
}

export default List;