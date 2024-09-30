import { useState, useEffect } from "react";
import List from '@mui/material/List'
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";

const getInitialData = () =>{
const data = JSON.parse(localStorage.getItem("todos"));
if(!data) return [];
return data
}


export default function TodoList(){
    const [todos,setTodos] = useState(getInitialData)

 useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
},[todos])

    const removeTodo = (id) =>{
        setTodos((currTodo) =>{
           return currTodo.filter((t) => t.id !== id)
        })
    }

    const toggleTodo = (id) =>{
        setTodos((currTodo)=>{
          return  currTodo.map((t)=>{
                if(t.id == id){
                    return {...t,completed : !t.completed}
                }else{
                    return {...t}
                }
            })
        })
    }

    const addTodo = (text)=>{
       return setTodos((curtodo)=>{
            return [...curtodo,{id:7,text : text,completed:false}]
        })
    }

    return(
    <List  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo ={todo} remove = {removeTodo} toggle = {toggleTodo}/>
      })}
      <TodoForm add={addTodo}/>
    </List>
    )
}

