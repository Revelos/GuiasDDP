import React,{useState} from 'react';
import Todo from '../components/Todo';
const Form = () => {
    const [todo, setTodo] = useState({})
    const [qty, setCant] = useState({})
    const [todos, setTodos] = useState([
        {todo: 'Manzanas', qty: '8'},
        {todo: 'Peras', qty: '3'},
        {todo: 'Guineos', qty: '1'}
    ])
    
    const handleChange = e => {
        setTodo({[e.target.name]: e.target.value})
        
    }
   
    const handleClick = e => {
        
        setTodos([...todos, {todo: todo.todo,qty:qty.qty}])
    }
    const handleChange2 = e => {
        setCant({[e.target.name]: e.target.value})
        
    }
    const deleteTodo = indice => {
        
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    
    return(
        <>
        <form onSubmit={e=>e.preventDefault()}>
            <label>Agregar tarea</label><br />
            <input type="text" name="todo" onChange={handleChange} required placeholder="Ingrese el producto"  />
            <input type="number" name="qty" onChange={handleChange2} required placeholder="Ingrese la cantidad"/>
            <button onClick={handleClick}>Agregar</button>
        </form>
        {
            todos.map((value,index)=>(<Todo  todo={value} key={index} index={index} deleteTodo={deleteTodo}/>))
        }
        </>
    )
}

export default Form