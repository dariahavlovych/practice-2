import { Grid, TodoListItem } from 'components';

export const TodoList = ({ todos, onDelete }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          text={todo.text}
          counter={index + 1}
          id={todo.id}
          onDelete={onDelete}
        />
      ))}
    </Grid>
  );
};
