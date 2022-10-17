import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import useLocalStorage from 'use-local-storage';

function App() {
  const [theme,setTheme]= useLocalStorage("theme","light")
  const [onToggle,setOnToggle] = useState(false);

  const toggleTheme = ()=>{
    let newTheme = theme === "light"?"dark":"light";
    setTheme(newTheme);
    setOnToggle(!onToggle)
  }  

  useEffect(()=>{
    if(theme ==="dark"){
      setOnToggle(true);
    }
  },[theme])

  return (
    <div className="App">
      <Header onSwitch={onToggle} myTheme={theme} onToggleTheme={toggleTheme}/>
      <Hero myTheme={theme}/>
      <Footer  myTheme={theme}/>
    </div>
  );
}

export default App;
