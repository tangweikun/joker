import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './fontIcon'
import './App.css'
import Github from 'routes/github'
import Rainbow from 'routes/rainbow'
import KnowledgeGraph from 'routes/knowledge-graph'
import Resume from 'routes/resume'

// TODO: 合理配置路由
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav>
            <StyledLink to="/knowledge-graph">Home</StyledLink>
            <StyledLink to="/github">Github</StyledLink>
            <StyledLink to="/rainbow">Rainbow</StyledLink>
            <StyledLink to="/resume">Resume</StyledLink>
            <StyledLink to="/knowledge-graph">KnowledgeGraph</StyledLink>
          </Nav>
          <Switch>
            <Route path="/" exact component={Rainbow} />
            <Route path="/knowledge-graph" exact component={KnowledgeGraph} />
            <Route path="/knowledge-graph/:number" component={KnowledgeGraph} />
            <Route path="/rainbow" component={Rainbow} />
            <Route path="/github" component={Github} />
            <Route path="/resume" component={Resume} />
          </Switch>
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
