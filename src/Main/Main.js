import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';

export default function Main({ zodiac }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {/* import the ZodiacCard component */} 
      {/* get the zodiac array from props */}
      {/* for each item in the `zodiacs` array props, render a ZodiacCard component, passing in the name and the dates as props to the ZodiacCard component */}
      { zodiac.map((item, i) => <ZodiacCard
        {...item}
        key = { item.dates + i} />)
      }
    </main>
  );
}
