import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState('light');

  const toggleMode = () => {
    if(darkMode === 'dark') {
      setDarkMode('light');
      document.body.style.backgroundImage = 'linear-gradient(to bottom right, #FFFFFF, #DFDFDF)';
      document.body.style.color = 'black';
    }
    else {
      setDarkMode('dark');
      document.body.style.backgroundImage = 'linear-gradient(to bottom right, grey, #122B40)';
      document.body.style.color = 'white';
    }
  }

  return (
    <>
    <Navbar title = {"TextUtils"} about = {"About TextUtils"} darkMode = {darkMode} toggleMode = {toggleMode}/>
    <div className="container my-3">
      <TextForm heading = {"Enter the text to analyze below!"}/>
      <About/>
    </div>
    </>
  );
}

export default App;


/* Created with https://www.css-gradient.com */
// background: #3030E8;
// background: -webkit-linear-gradient(top left, #3030E8, #114570);
// background: -moz-linear-gradient(top left, #3030E8, #114570);
// background: linear-gradient(to bottom right, #3030E8, #114570);