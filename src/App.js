import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'
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
import Github from 'routes/github'
import Rainbow from 'routes/rainbow'

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
          <Nav>
            <Link to="github">github</Link>
            <Link to="rainbow">rainbow</Link>
          </Nav>
          <Route path="/" exact component={Rainbow} />
          <Route path="/about/" component={About} />
          <Route path="/rainbow" component={Rainbow} />
          <Route path="/github" component={Github} />
        </div>
      </BrowserRouter>
    )
  }
}

const Nav = styled.div`
  height: 40px;
  line-height: 40px;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: #ce7693;
  padding: 0 20px;
`

export default App
