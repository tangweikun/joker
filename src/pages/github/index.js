import React, { Component } from 'react'
import get from 'lodash/get'
import { BasicInfo } from 'components/basicInfo'
import { RepositoriesInfo } from 'components/repositoriesInfo'

export default class Github extends Component {
  state = {
    userInfo: {},
    repositories: [],
    hotmap: [],
    commits: [],
    formatCommits: [],
  }

  componentDidMount() {
    fetch('https://profile-summary-for-github.com/api/user/tangweikun')
      .then(res => res.json())
      .then(
        res =>
          this.setState({
            langCommitCount: get(res, 'langCommitCount', {}),
            repoStarCountDescriptions: get(
              res,
              'repoStarCountDescriptions',
              {},
            ),
            repoStarCount: get(res, 'repoStarCount', {}),
            langRepoCount: get(res, 'langRepoCount', {}),
            langStarCount: get(res, 'langStarCount', {}),
            quarterCommitCount: get(res, 'quarterCommitCount', {}),
            repoCommitCount: get(res, 'repoCommitCount', {}),
            repoCommitCountDescriptions: get(
              res,
              'repoCommitCountDescriptions',
              {},
            ),
          }),
        error => {},
      )

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
    console.log(repositories, '00')
    return (
      <React.Fragment>
        <BasicInfo userInfo={userInfo} />
        {repositories.length > 0 && (
          <RepositoriesInfo repositories={repositories} />
        )}
      </React.Fragment>
    )
  }
}
