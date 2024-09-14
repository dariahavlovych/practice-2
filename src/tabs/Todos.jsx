import { Text, Form, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const saveTodos = JSON.parse(localStorage.getItem('todos'));
    if (saveTodos) {
      return saveTodos;
    }
    return [];
  });

  const addTodo = value => {
    setTodos(prev => [
      ...prev,
      {
        text: value,
        id: nanoid(),
      },
    ]);
  };

  const handleDelete = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Form onSubmit={addTodo} />
      {todos.lenght !== 0 ? (
        <TodoList todos={todos} handleDelete={handleDelete} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </div>
  );
};
