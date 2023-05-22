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
    setTodos(fetchedTodos);
  }, []);

  const navigateToAdd = (e) => {
    e.preventDefault();
    navigate('/add-todo');
  };

  const handleDelete = (index) => {
    deleteTodo(index);
    const updatedTodos = getTodos();
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
            {todos.length > 0 ? (
              <div className='col-12'>
                <table className='table'>
                  <tbody>
                    {todos.map((todo, index) => (
                      <tr key={todo.id}>
                        <td>
                          <p>
                            {todo.text} &nbsp;
                            <span className='timestamp'>{new Date(todo.createdAt).toLocaleString()}</span>
                          </p>
                        </td>
                        <td>
                          <div>
                            <Link to={`/details/${todo.id}`}>
                              <Btn name='btn btn-outline-dark mb-2' title='Details' />
                            </Link>{' '}
                            &nbsp;
                            <Link to={`/edit-todo/${todo.id}?oldData=${encodeURIComponent(JSON.stringify(todo))}`} className='editLink'>
                              <FontAwesomeIcon icon={faEdit} size='2x' className='text-dark' onClick={() => handleEdit(todo.id)} />
                            </Link>
                            &nbsp;
                            <FontAwesomeIcon icon={faTrashAlt} size='2x' onClick={() => handleDelete(index)} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className='col-12'>
                <p>No Todo Found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
