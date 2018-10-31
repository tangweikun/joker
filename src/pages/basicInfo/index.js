import React, { PureComponent } from 'react'
import get from 'lodash/get'
import styled from 'styled-components'
import { Card } from 'components/card'
import styles from './index.module.css'

const Top = ({ userInfo }) => (
  <div className={styles['top']}>
    <div className={styles['img-wrapper']}>
      <img src={get(userInfo, 'avatar_url')} alt="avatar" />
    </div>
    <div className={styles['info-wrapper']}>
      <a href="">{get(userInfo, 'name')}</a>
      <div>
        <span>加入时间:&nbsp;&nbsp;</span>
        <span>{get(userInfo, 'created_at')}</span>
      </div>
      <div className={styles['bio']}>{get(userInfo, 'bio')}</div>
    </div>
  </div>
)

const Bottom = ({ userInfo }) => (
  <div className={styles['bottom']}>
    <LinkCard
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/tangweikun?tab=repositories"
    >
      <span className={styles['count']}>
        {get(userInfo, 'public_repos', 0)}
      </span>
      &nbsp;
      <span>Repositories</span>
    </LinkCard>
    <LinkCard
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/tangweikun?tab=followers"
    >
      <span className={styles['count']}>{get(userInfo, 'followers', 0)}</span>
      &nbsp;
      <span>Followers</span>
    </LinkCard>
    <LinkCard
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/tangweikun?tab=following"
    >
      <span className={styles['count']}>{get(userInfo, 'following', 0)}</span>
      &nbsp;
      <span>Following</span>
    </LinkCard>
  </div>
)

const LinkCard = styled.a`
  flex: 1;
  height: 90px;
  line-height: 90px;
  display: block;
  text-decoration: none;
  text-align: center;
  border-radius: 3px;
  margin: 8px;
  background-color: rgba(55, 178, 77, 0.9);
`

export class BasicInfo extends PureComponent {
  render() {
    const { userInfo } = this.props

    return (
      <Card>
        <Top userInfo={userInfo} />
        <Bottom userInfo={userInfo} />
      </Card>
    )
  }
}
