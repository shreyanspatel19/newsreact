// import logo from './logo.svg';
import './App.css';
import Newscontet from './componts/newscontet'
import Navbar from './componts/navbar'
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>

      <Routes>
      <Route key="hgeneral" exact  path="/" element={<Newscontet country="in" category="general"/>} />
      <Route key="usgeneral" exact  path="/United_States_of_America" element={<Newscontet country="us" category="general"/>} />
      <Route key="rugeneral" exact  path="/Russian_Federation" element={<Newscontet country="ru" category="general"/>} />
      <Route key="uageneral" exact  path="/Ukraine" element={<Newscontet country="ua" category="general"/>} />
      <Route key="business" exact  path="/business" element={<Newscontet country="in" category="business"/>} />
      <Route key="entertainment" exact  path="/entertainment" element={<Newscontet country="in" category="entertainment"/>} />
      <Route key="general" exact path="/general" element={<Newscontet country="in" category="general"/>} />
      <Route key="health" exact  path="/health" element={<Newscontet country="in" category="health"/>} />
      <Route key="science" exact path="/science" element={<Newscontet country="in" category="science"/>} />
      <Route key="sports" exact  path="/sports" element={<Newscontet country="in" category="sports"/>} />
      <Route key="technology" exact path="/technology" element={<Newscontet country="in" category="technology"/>} />
</Routes>

      </Router>
      </>
    )
  }
}

