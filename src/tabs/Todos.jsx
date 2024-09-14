import { Text, Form, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = value => {
    setTodos(prev => [
      ...prev,
      {
        text: value,
        id: nanoid(),
      },
    ]);
  };

  return (
    <div>
      <Text textAlign="center">There are no any todos ...</Text>
      <Form onSubmit={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};
