// src/components/Users.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledUsers = styled.div`
  .card {
    display: flex;
    border: 1px solid salmon;
    padding: 20px;
  }

  .photo {
    margin-right: 20px;
    display: flex;
    align-items: flex-start;
  }

  .img {
    border-radius: 50%;
  }
`;

function Users({ users }) {
  return (
    <StyledUsers>
      {users.map((user, index) => (
        <div className='card' key={index}>
          <div className='photo'>
            <img className='img' src={user.thumbnail} alt={user.name} />
          </div>
          <h1 className='name'>{user.name}</h1>
        </div>
      ))}
    </StyledUsers>
  );
}

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
