import { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Cats from './Cats';

import './App.css';

function App() {
  const [page, setPage] = useState('Home');

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };


  return (
    <>
    <Header pageChange={handlePageChange} />
    { (page==='Home') && <Home pageChange={handlePageChange}/> }
    { (page==='About') && <About/>}
    { (page==='Cats') &&  <Cats/>}
    <Footer />
    </>
  );
}

export default App;