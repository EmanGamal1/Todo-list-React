import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from '../../SharedUI/Btn/Btn';
import { saveTodo } from '../../todoStorage'; // Import the storage functions
import '../../index.css';
import TextArea from '../../SharedUI/TextArea/TextArea';

export const userContext = createContext();

const CreateTodo = () => {
  const navigate = useNavigate();

  const [todoInfo, setTodoInfo] = useState({
    todo: ''
  });

  const [formErrors, setFormErrors] = useState({
    todoErr: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInfo.todo.length < 5 || todoInfo.todo.length > 100) {
    setFormErrors({
        ...formErrors,
        todoErr: "Todo name must be between 5 and 100 characters"
    });
    } else {
        // Save the todo to local storage
        saveTodo(todoInfo.todo);

        // Assuming you have a todos state in your home page, you can pass the added todo as a parameter to the navigate function
        navigate('/', { state: { todo: todoInfo.todo } });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.id) {
        case 'todo':
            setTodoInfo({
                ...todoInfo,
                todo: e.target.value
            });
            setFormErrors({
                ...formErrors,
                todoErr: (e.target.value.length < 5 || e.target.value.length > 100) && "Todo name must be between 5 and 100 characters"
            });
            break;
        default:
            return;
    }
  };

  return (
    <div className='container allItems'>
<div className='row listItem p-5 m-auto'>
  
      <form onSubmit={handleSubmit}>
        Todo:
        <TextArea type="text" name="todo" id="todo" className="form-control m-auto mt-5 mb-2" handleChange={handleChange} value={todoInfo.todo} /><br/>
        {formErrors.todoErr && <span className='alert alert-danger'>{formErrors.todoErr}</span>}<br /><br/>
        <Btn name="btn btn-outline-primary" type="submit" title="Add" />
      </form>
      </div>
    </div>
  );
};

export default CreateTodo;

