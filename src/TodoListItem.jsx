import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function TodoListItem({todo,remove,toggle}){
    const labelId = `checkbox-list-label-${todo}`;
    return(
        <ListItem
        key={todo.id}
        secondaryAction={
          <IconButton edge="end" aria-label="comments" onClick={()=>remove(todo.id)}>
            <CommentIcon />
          </IconButton>
        }
        disablePadding
      > 
        
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
              onChange={() =>toggle(todo.id)}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={todo.text} />
      </ListItem>
    )
}