import React, { useState } from 'react';
import Greeting from './components/greeting';
import Counter from './components/counter';
import './App.css'; 
import Card from './components/card'
import image1 from './images/flower.jpg';
import image2 from './images/flower2.jpg';
import image3 from './images/flower3.jpg';



const App = () => {
  const [active, setActive] = useState('Greeting');

  return (
    <div className="app-container">
      <h1 className="app-title">React Component Switcher</h1>

      <div className="button-group">
        <button 
          className={active === 'Greeting' ? 'active-btn' : 'default-btn'} 
          onClick={() => setActive('Greeting')}
        >
          Greeting
        </button>
        <button 
          className={active === 'Counter' ? 'active-btn' : 'default-btn'} 
          onClick={() => setActive('Counter')}
        >
          Counter
        </button>
        <button 
          className={active === 'Card' ? 'active-btn' : 'default-btn'} 
          onClick={() => setActive('Card')}
        >
          Card
        </button>
      </div>

      <div className="component-display">
        {active === 'Greeting' && <Greeting />}
        {active === 'Counter' && <Counter />}
       {active === 'Card' && (
  <>
    <div style={{display:"flex",  alignItems:"center", justifyContent:"center", gap:"10px"}}>
      <Card image={image1} 
      title="Flower" 
      para="Flowering trees are a beautiful sight in spring, showcasing vibrant blossoms before their leaves emerge" 
    />
    <Card 
    image={image2}
      title="Theme" 
      para="Make your UI consistent with a theme palette." 
    />
    <Card 
    image={image3}
      title="Theme" 
      para="Make your UI consistent with a theme palette." 
    />
    </div>
  </>
)}

      </div>
    </div>
  );
};

export default App;
