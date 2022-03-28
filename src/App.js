import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import { data } from './mocks/handlers';
import axios from 'axios';

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
    .catch(err => consoler.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { list && <Character list={list} /> }
    </div>
  );
}

export default App;
