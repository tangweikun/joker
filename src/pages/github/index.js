import React, { Component } from 'react'
import get from 'lodash/get'
import { BasicInfo } from 'components/basicInfo'
import { RepositoriesInfo } from 'components/repositoriesInfo'

export default class Github extends Component {
  state = { userInfo: {} }

  componentDidMount() {
    fetch('https://hacknical.com/github/tangweikun/info')
      .then(res => res.json())
      .then(
        res => this.setState({ userInfo: get(res, 'result', {}) }),
        error => {},
      )

    fetch('https://hacknical.com/github/tangweikun/repositories')
      .then(res => res.json())
      .then(
        res => this.setState({ repositories: get(res, 'result', []) }),
        error => {},
      )

    fetch('https://hacknical.com/github/tangweikun/hotmap')
      .then(res => res.json())
      .then(
        res => this.setState({ hotmap: get(res, 'result', []) }),
        error => {},
      )

    fetch('https://hacknical.com/github/tangweikun/commits')
      .then(res => res.json())
      .then(
        res =>
          this.setState({
            commits: get(res, 'result.commits', []),
            formatCommits: get(res, 'result.formatCommits', []),
          }),
        error => {},
      )
  }

  render() {
    const { userInfo } = this.state

    return (
      <React.Fragment>
        <BasicInfo userInfo={userInfo} />
        <RepositoriesInfo />
      </React.Fragment>
    )
  }
}
