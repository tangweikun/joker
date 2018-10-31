import React, { Component } from 'react'
import get from 'lodash/get'
import './App.css'
import { BasicInfo } from 'pages/basicInfo'

class App extends Component {
  state = { userInfo: {} }

  componentDidMount() {
    fetch('https://hacknical.com/github/tangweikun/info')
      .then(res => res.json())
      .then(res => this.setState({ userInfo: get(res, 'result') }), error => {})
  }
  render() {
    const { userInfo } = this.state

    return (
      <div className="App">
        <BasicInfo userInfo={userInfo} />
      </div>
    )
  }
}

export default App
