import { useState } from "react";
import List from '@mui/material/List'
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";

const initialtodo = [{id:1, text : "Walk the Cat", completed: true},
{id:2, text : "Walk the Dog", completed: false},
{id:3, text : "Walk the Donkey", completed: false},
{id:4, text : "Walk the Monkey", completed: true}]

export default function TodoList(){
    const [todos,setTodos] = useState(initialtodo)

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

