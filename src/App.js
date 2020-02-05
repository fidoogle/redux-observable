import React from 'react';
import Search from './components/search'
import Tiles from './components/tiles'
import Nav from './components/nav'
import PageTitles from './components/page-titles'
import Footer from './components/footer'

function App() {
  
  return (
    <>
      <Nav/>
      <PageTitles/>
      <Search/>
      <Tiles/>
      <Footer/>
    </>
  );
}

export default App;
