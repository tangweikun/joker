import React, { Component } from 'react'
import get from 'lodash/get'
import './App.css'
import Github from 'pages/github'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Github />
      </div>
    )
  }
}

export default App
