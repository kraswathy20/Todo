import { useState, useEffect } from "react";
import List from '@mui/material/List'
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";
import { Box ,Typography} from "@mui/material";
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
            return [...curtodo,{id:crypto.randomUUID(),text : text,completed:false}]
        })
    }

    return(
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center",
            m: 5
        }}>
            <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
            Todos
          </Typography>
    <List  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo ={todo} remove = {removeTodo} toggle = {toggleTodo}/>
      })}
      <TodoForm add={addTodo}/>
    </List>
    </Box>
    )
}

