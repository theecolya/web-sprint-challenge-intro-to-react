import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import axios from 'axios';
import styled from 'styled-components';

const StyledBody = styled.div`
  background-color: rgba(204, 202, 202, 0.5);
  padding: 2em;
  border-radius: 20px;
  width: 50%;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [list, setList] = useState([])
  //const [character, setCharacter] = useState()
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setList(res.data)
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <StyledBody className="App">
      <h1 className="Header">Characters</h1>
      { list && <Character list={list} /> }
    </StyledBody>
  );
}

export default App;
