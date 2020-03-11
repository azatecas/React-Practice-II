import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CardList from './components/CardList';

import './App.css';

function App() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    axios
      .get(`https://last-airbender-api.herokuapp.com/api/v1/characters`)
      .then(res =>{
        // console.log(res);
        setCards(res.data);
      })
      .catch( err => console.log('error fetcing', err))
  }, []);
  return (
    <div className="App">
      <CardList cards={cards}/>
    </div>
  );
}

export default App;
