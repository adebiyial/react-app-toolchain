// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import './app.scss';
import styled from 'styled-components';

const StyledApp = styled.div`
  text-transform: uppercase;
`;

function App() {
  return (
    <StyledApp>
      <h1 className='clr-red bg-clr-black'>Hello World!</h1>
    </StyledApp>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
