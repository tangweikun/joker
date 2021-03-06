import React, { Component } from 'react'
import get from 'lodash/get'
import styled from 'styled-components'
import { BasicInfo } from 'components/basicInfo'
import { RepositoriesInfo } from 'components/repositoriesInfo'
import { Contribution } from 'components/contribution'

export default class Github extends Component {
  state = {
    userInfo: {},
    repositories: [],
    hotmap: [],
    commits: [],
    formatCommits: [],
  }

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
    const {
      userInfo,
      repositories,
      hotmap,
      commits,
      formatCommits,
      langCommitCount,
    } = this.state

    return (
      <Wrapper>
        <BasicInfo userInfo={userInfo} />
        {repositories.length > 0 && (
          <RepositoriesInfo repositories={repositories} />
        )}
        <Contribution />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 750px;
  margin: 0 auto;
`
