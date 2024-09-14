import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <TodoListItem key={todo.id} text={todo.text} counter={index + 1} />
      ))}
    </Grid>
  );
};
