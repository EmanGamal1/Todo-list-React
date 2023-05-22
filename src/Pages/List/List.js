import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import Btn from '../../SharedUI/Btn/Btn';
import { useNavigate, Link } from 'react-router-dom';
import { getTodos, deleteTodo } from '../../todoStorage';
import './List.css';

const List = () => {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchedTodos = getTodos();
    // const sortedTodos = fetchedTodos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort todos in descending order
    setTodos(fetchedTodos);
  }, []);

  const navigateToAdd = (e) => {
    e.preventDefault();
    navigate('/add-todo');
  };

  const handleDelete = (todo) => {
    deleteTodo(todo.id);
    const updatedTodos = getTodos();
    // const sortedTodos = updatedTodos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setTodos(updatedTodos);
  };

  const handleEdit = (todo) => {
    navigate(`/edit-todo/${todo.id}?oldData=${encodeURIComponent(JSON.stringify(todo))}`);
};

  return (
    <div className='body'>
      <div className='container listContent'>
        <h3 className='mt-3'>Today's work</h3>
        <p>Write your work to do now!</p>
        <Btn name='btn btn-outline-dark' title='Add Todo' onClick={navigateToAdd} />
        <div className='container allItems mb-4'>
          <div className='row listItem pt-4 m-auto pb-3'>
            <div className='col-8'>
              {todos.map((todo) => (
                <div key={todo.id}>
                  <p>
                    {todo.text} &nbsp;
                    <span className="timestamp">{new Date(todo.createdAt).toLocaleString()}</span>                  
                  </p>
                </div>
              ))}
            </div>
            <div className='col-4'>
              {todos.map((todo) => (
                <div key={todo.id} className='deleteButton'>
                    <Link to={`/details/${todo.id}`}>
                    <Btn name="btn btn-outline-dark mb-2" title="Details"/>
                  </Link> &nbsp;
                  <Link
                    to={`/edit-todo/${todo.id}?oldData=${encodeURIComponent(JSON.stringify(todo))}`}
                    className='editLink'> 
                        <FontAwesomeIcon icon={faEdit} size='2x' className='text-dark' onClick={() => handleEdit(todo.id)} />
                  </Link>&nbsp;
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    size='2x'
                    onClick={() => handleDelete(todo.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
