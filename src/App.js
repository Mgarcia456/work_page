import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div  className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
