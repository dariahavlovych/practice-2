import { Form, Text, TodoList } from 'components';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const LS_KEY = 'todos';
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem(LS_KEY);

    if (savedTodos !== null) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodos = newTodo => {
    setTodos(prev => [
      ...prev,
      {
        text: newTodo,
        id: nanoid(),
      },
    ]);
  };

  const deleteTodo = itemId => {
    setTodos(prev => prev.filter(item => item.id !== itemId));
  };

  return (
    <>
      <Form onSubmit={addTodos}></Form>
      {todos.length !== 0 ? (
        <TodoList todos={todos} onDelete={deleteTodo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
