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
import KnowledgeGraph from 'routes/knowledge-graph'

library.add(faChartBar)
library.add(faStar)
library.add(faAddressCard)
library.add(faCodeBranch)
library.add(faBoxes)
library.add(faBox)
library.add(faClock)
library.add(faInfoCircle)
library.add(faAward)

const About = () => <h2>About</h2>
const Resume = () => <h2>Resume</h2>

// TODO: 合理配置路由
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav>
            <StyledLink to="rainbow">Home</StyledLink>
            <StyledLink to="github">Github</StyledLink>
            <StyledLink to="rainbow">Rainbow</StyledLink>
            <StyledLink to="resume">Resume</StyledLink>
            <StyledLink to="knowledge-graph">KnowledgeGraph</StyledLink>
          </Nav>
          <Route path="/" exact component={Rainbow} />
          <Route path="/knowledge-graph" component={KnowledgeGraph} />
          <Route path="/rainbow" component={Rainbow} />
          <Route path="/github" component={Github} />
          <Route path="/resume" component={Resume} />
        </div>
      </BrowserRouter>
    )
  }
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  padding-right: 20px;
  font-size: 20px;
`

const Nav = styled.div`
  top: 0;
  left: 0;
  height: 56px;
  line-height: 56px;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: #ce7693;
  padding: 0 40px;
`

export default App
