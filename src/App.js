import React from 'react';
import NavBar from './components/nav-bar';
import Photos from './components/photos';
import Title from './components/title';
import cards from './components/cards-data';
import Card from './components/card';


function App() {
  const cards_map = cards.map(card => {
    return <Card
      key={card.id}
      {...card} 
    />
  })


  return (
    <div className='main-section'>
      <NavBar />
      <Photos />
      <Title />
      <div className='card-wrap'>
        {cards_map}
      </div>
    </div>
  )
}

export default App;

