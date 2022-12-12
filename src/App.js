
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import {useState} from 'react'

import Header from './Components/Header/Header'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Routes from './Routes';


function App() {

  return (
    <>
    <Router>

    <Header/>
    <Routes/>
    </Router>
    </>
  );

} export default App;