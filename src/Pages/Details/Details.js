import React from 'react';
import { useParams } from 'react-router-dom';
import { getTodos } from '../../todoStorage';
import '../../index.css';

const Details = () => {
  const { id } = useParams();
  const todos = getTodos();
  const todo = todos.find((todo) => todo.id === parseInt(id));

  if (!todo) {
    return <div>No todo found.</div>;
  }

  return (
        <div className='container allItems'>
          <div className='row listItem p-5 m-auto'>
            <h4>Details</h4>
            <p><b>Todo:</b> {todo.text}</p>
      </div><br/>
      <p>This todo is created on {todo.createdAt}</p>

</div>
   );
};

export default Details;
