import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChartBar,
  faAddressCard,
  faStar,
  faCodeBranch,
  faBoxes,
  faBox,
  faClock,
  faInfoCircle,
  faAward,
} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './App.css'
import Github from 'pages/github'

library.add(faChartBar)
library.add(faStar)
library.add(faAddressCard)
library.add(faCodeBranch)
library.add(faBoxes)
library.add(faBox)
library.add(faClock)
library.add(faInfoCircle)
library.add(faAward)

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

// TODO: 合理配置路由
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <Route path="/github" component={Github} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
