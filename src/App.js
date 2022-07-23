import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Footer from './Components/Footer';
import { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 15000)
  }

  const toggleMode = () => {
    if(darkMode === 'dark') {
      setDarkMode('light');
      document.body.style.backgroundImage = 'linear-gradient(to bottom right, #FFFFFF, #DFDFDF)';
      document.body.style.color = 'black';
      showAlert('Light Mode enabled', 'success');
      document.title = 'TextUtils - Home';
    }
    else {
      setDarkMode('dark');
      document.body.style.backgroundImage = 'linear-gradient(to bottom right, grey, #122B40)';
      document.body.style.color = 'white';
      showAlert('Dark Mode enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    }
  }

  return (
    <>
    <Navbar title = {"TextUtils"} about = {"About TextUtils"} darkMode = {darkMode} toggleMode = {toggleMode}/>
    <div className="container my-3">
      <Alert alert = {alert}/>
      <TextForm heading = {"Enter the text to analyze below!"} showAlert = {showAlert}/>
      <About/>
    </div>
    <Footer darkMode = {darkMode}/>
    </>
  );
}

export default App;


/* Created with https://www.css-gradient.com */
// background: #3030E8;
// background: -webkit-linear-gradient(top left, #3030E8, #114570);
// background: -moz-linear-gradient(top left, #3030E8, #114570);
// background: linear-gradient(to bottom right, #3030E8, #114570);