import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";


export default class App extends Component {
  pageSize = 5;
  state = {
    progress: 0,
  }
  setprogress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={4}
            progress={this.state.progress}

          />
          <Routes>
            <Route path='/' element={<News setprogress={this.setprogress} key="general" pageSize={this.pageSize} country="in" category="General" />} ></Route>
            <Route path='/business' element={<News setprogress={this.setprogress} key="Business" pageSize={this.pageSize} country="in" category="Business" />}></Route>
            <Route path='/entertainment' element={<News setprogress={this.setprogress} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />}></Route>
            <Route path='/general' element={<News setprogress={this.setprogress} key="General" pageSize={this.pageSize} country="in" category="General" />}></Route>
            <Route path='/health' element={<News setprogress={this.setprogress} key="Health" pageSize={this.pageSize} country="in" category="Health" />}></Route>
            <Route path='/science' element={<News setprogress={this.setprogress} key="Science" pageSize={this.pageSize} country="in" category="Science" />}></Route>
            <Route path='/sports' element={<News setprogress={this.setprogress} key="Sports" pageSize={this.pageSize} country="in" category="Sports" />}></Route>
            <Route path='/technology' element={<News setprogress={this.setprogress} key="Technology" pageSize={this.pageSize} country="in" category="Technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}




