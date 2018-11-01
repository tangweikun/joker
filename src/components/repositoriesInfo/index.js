import React from 'react'
import styled, { css } from 'styled-components'
import { Card } from 'components/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import get from 'lodash/get'
import moment from 'moment'

export class RepositoriesInfo extends React.PureComponent {
  state = {}

  componentDidMount() {
    const { repositories } = this.props

    const mostPopularRepository = repositories.sort(
      (x, y) => y['stargazers_count'] - x['stargazers_count'],
    )[0]

    const longestRunningRepository = repositories.sort(
      (x, y) =>
        new Date(y['updated_at']) -
        new Date(y['created_at']) -
        (new Date(x['updated_at']) - new Date(x['created_at'])),
    )[0]

    const { totalStars, totalForks, totalRepositories } = repositories.reduce(
      (acc, x) => (
        (acc['totalStars'] += x['stargazers_count']),
        (acc['totalForks'] += x['forks']),
        (acc['totalRepositories'] += 1),
        acc
      ),
      { totalStars: 0, totalForks: 0, totalRepositories: 0 },
    )

    this.setState({
      mostPopularRepository,
      longestRunningRepository,
      totalStars,
      totalForks,
      totalRepositories,
    })
  }

  render() {
    const {
      mostPopularRepository,
      longestRunningRepository,
      totalStars,
      totalForks,
      totalRepositories,
    } = this.state
    console.log(this.state)
    return (
      <Card title="仓库概览" icon="chart-bar">
        <Group>
          <InfoCard>
            <MainText>
              <FontAwesomeIcon icon="star" color="green" />
              &nbsp; {totalStars}
            </MainText>
            <SubText>收获star数</SubText>
          </InfoCard>
          <InfoCard>
            <MainText>
              <FontAwesomeIcon icon="code-branch" color="green" />
              &nbsp; {totalForks}
            </MainText>
            <SubText>收获fork数</SubText>
          </InfoCard>
          <InfoCard isLastChild>
            <MainText>
              <FontAwesomeIcon icon="boxes" color="green" />
              &nbsp; {totalRepositories}
            </MainText>
            <SubText>创建的仓库数</SubText>
          </InfoCard>
        </Group>

        <Group>
          <InfoCard>
            <MainText>
              <FontAwesomeIcon icon="box" color="green" />
              &nbsp;{' '}
              {get(
                mostPopularRepository,
                'name',
                'Something Terrible happened',
              )}
            </MainText>
            <SubText>最受欢迎的仓库</SubText>
          </InfoCard>
          <InfoCard isLastChild>
            <MainText>
              <FontAwesomeIcon icon="clock" color="green" />
              &nbsp;{' '}
              {moment(
                get(longestRunningRepository, 'created_at', new Date()),
              ).format('YYYY-MM-DD')}
              ~
              {moment(
                get(longestRunningRepository, 'updated_at', new Date()),
              ).format('YYYY-MM-DD')}
            </MainText>
            <SubText>持续时间最长的仓库</SubText>
          </InfoCard>
        </Group>
      </Card>
    )
  }
}

const MainText = styled.div`
  font-size: 1.6em;
  color: #495057;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const SubText = styled.div`
  font-size: 12px;
  color: #adb5bd;
  user-select: none;
  text-align: center;
`

const InfoCard = styled.div`
  font-size: 12px;
  flex: 1;
  padding: 15px 10px;
  margin: 10px 5px;
  display: inline-flex;
  flex-direction: column;
  user-select: none;
  min-width: 100px;
  text-align: center;

  ${props =>
    !props.isLastChild &&
    css`
      border-right: 1px solid #dee2e6;
    `};
`

const Group = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dee2e6;
`
