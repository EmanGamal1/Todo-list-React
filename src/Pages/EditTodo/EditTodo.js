import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveTodoEdit, deleteTodo } from '../../todoStorage';
import Btn from '../../SharedUI/Btn/Btn';
import '../../index.css';
import TextArea from '../../SharedUI/TextArea/TextArea';

const EditTodo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const oldData = new URLSearchParams(location.search).get('oldData');
  const parsedOldData = JSON.parse(decodeURIComponent(oldData));

  const [todo, setTodo] = useState(parsedOldData.text);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSave = () => {
    if (todo.length < 5 || todo.length > 100) {
      setError(`Todo text must be between 5 and 100 characters`);
      return;
    }

    deleteTodo(parsedOldData);
    const updatedTodo = { ...parsedOldData, text: todo };
    saveTodoEdit(updatedTodo);
    navigate('/');
  };

  return (
<div className='container allItems'>
<div className='row listItem p-5 m-auto'>
      <TextArea className='form-control' type="text" value={todo} handleChange={handleInputChange} />
      {error && <p className="error alert alert-danger">{error}</p>}<br/>
      <Btn onClick={handleSave} title="Save" name="btn w-25 btn-outline-dark mt-3" />
</div><br/>
<p>This todo is created on {parsedOldData.createdAt}</p>

</div>

  );
};

export default EditTodo;
