import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Card } from 'components/card'

class App extends Component {
  componentDidMount() {
    fetch('https://hacknical.com/github/tangweikun/info')
      .then(res => res.json())
      .then(
        result => {
          console.log(result)
        },
        error => {},
      )
  }

  render() {
    return (
      <div className="App">
        <Card>777</Card>
      </div>
    )
  }
}

export default App
