export const saveTodo = (todo) => {
  const todos = getTodos();
  const newTodo = {
    id: Math.random().toString(36).substring(2, 15),
    text: todo,
    createdAt: new Date().toISOString(),
  };
  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const saveTodoEdit = (todo, id) => {
  const todos = getTodos();
  const updatedTodo = {
    id: id,
    text: todo.text,
    createdAt: todo.createdAt || new Date().toISOString(),
  };

  if (typeof id === 'number' && id >= 0 && id < todos.length) {
    todos[id] = updatedTodo;
  } else {
    todos.push(updatedTodo);
  }

  localStorage.setItem('todos', JSON.stringify(todos));
};


export const getTodos = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

// Function to delete a todo from local storage
export const deleteTodo = (index) => {
  const todos = getTodos();
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
};
