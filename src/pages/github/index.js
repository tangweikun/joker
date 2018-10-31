import React, { Component } from 'react'
import get from 'lodash/get'
import { BasicInfo } from 'components/basicInfo'

export default class Github extends Component {
  state = { userInfo: {} }

  componentDidMount() {
    fetch('https://hacknical.com/github/tangweikun/info')
      .then(res => res.json())
      .then(res => this.setState({ userInfo: get(res, 'result') }), error => {})
  }

  render() {
    const { userInfo } = this.state

    return (
      <React.Fragment>
        <BasicInfo userInfo={userInfo} />
      </React.Fragment>
    )
  }
}
