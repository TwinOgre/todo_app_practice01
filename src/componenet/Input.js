function Input({onInput, textChange}) {
    return ( <form><input onChange={textChange}/><button onClick={onInput}>등록</button></form> );
}

export default Input;