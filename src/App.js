import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 20;
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
      <Router>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="General" />} ></Route>
          <Route path='/business' element={<News setProgress={setProgress} key="Business" pageSize={pageSize} country="in" category="Business" />}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment" />}></Route>
          <Route path='/general' element={<News setProgress={setProgress} key="General" pageSize={pageSize} country="in" category="General" />}></Route>
          <Route path='/health' element={<News setProgress={setProgress} key="Health" pageSize={pageSize} country="in" category="Health" />}></Route>
          <Route path='/science' element={<News setProgress={setProgress} key="Science" pageSize={pageSize} country="in" category="Science" />}></Route>
          <Route path='/sports' element={<News setProgress={setProgress} key="Sports" pageSize={pageSize} country="in" category="Sports" />}></Route>
          <Route path='/technology' element={<News setProgress={setProgress} key="Technology" pageSize={pageSize} country="in" category="Technology" />}></Route>
        </Routes>
      </Router>
    </div>
    )
 
}

export default App;

