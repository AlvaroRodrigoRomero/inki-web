import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
import Scripts from './components/scripts'


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
      <Scripts/>
    </div>
  );
}

export default App;
