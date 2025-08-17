import React, { useState } from 'react'; 
import Search from './Search';


const  App = () => {
  const [searchTerm,setSearchTerm] = useState('');
  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="./Movie App w_ React/hero-img.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient"> Movies </span> You'll Enjoy</h1>

        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
      
  );
}

export default App;