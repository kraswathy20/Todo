import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { Create } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

export default function TodoForm({add}){
    const [text,setText] = useState('')

    const handleText = (evt) =>{
        setText(evt.target.value)
    }

   const handleSubmit = (evt) =>{
    evt.preventDefault();
    add(text);
    setText("")
   }
    
    return(
        <ListItem>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={text} 
            onChange={handleText}
            slotProps={{
                input:{
                    endAdornment :  <InputAdornment position="end">
                    <IconButton
                    aria-label="create Todo"
                    type='submit'
                >
                  <Create/>
                </IconButton>
              </InputAdornment>
                }
            }}
           />
            </form>
        </ListItem>
    )
}

