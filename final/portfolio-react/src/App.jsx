import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';


function App() {

  const [darkMode, setDarkMode] = useState(true);

  const [pageName, setPageName] = useState('Home');

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const changePage = (name) => {
    setPageName(name);
  }

  return (
    <>
      <Header darkMode={darkMode} toggleTheme={toggleMode} changePage={changePage} />
      <Content darkMode={darkMode} pageName={pageName} />
      <Footer darkMode={darkMode} />
    </>
  )
}

export default App