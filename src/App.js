// src/App.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import './app.scss';
import styled from 'styled-components';
import Users from './components/Users';

const StyledApp = styled.div`
  text-transform: uppercase;
`;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?format=json&results=10')
      .then(res => res.json())
      .then(res => {
        const results = res.results.map(({ picture, name }) => {
          return {
            thumbnail: picture.thumbnail,
            name: `${name.title} ${name.first} ${name.last}`,
          };
        });

        setUsers([...results]);
      });
  }, []);

  return (
    <StyledApp>
      <h1 className='clr-red bg-clr-black'>Hello World!</h1>
      <Users {...{ users }} />
    </StyledApp>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
