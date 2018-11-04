import React from 'react'
import { Tooltip } from 'building-block'
import styled, { css } from 'styled-components'
import { Card } from 'components/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import get from 'lodash/get'
import moment from 'moment'
import {
  PieChart,
  Pie,
  Legend,
  Tooltip as ChartTooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import { PROFILE_SUMMARY_FOR_GITHUB } from '../../fake-data'

const fills = ['#54CA76', '#F5C452', '#F2637F', '#9261F3', '#31A4E6', '#55CBCB']

export class RepositoriesInfo extends React.PureComponent {
  state = {}

  formatChartData = data =>
    Object.keys(data).map((key, index) => ({
      name: key,
      value: data[key],
      fill: fills[index % 6],
    }))

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
      langRepoCount,
      repoStarCount,
      quarterCommitCount,
    } = PROFILE_SUMMARY_FOR_GITHUB
    const langRepoCountData = this.formatChartData(langRepoCount)
    const repoStarCountData = this.formatChartData(repoStarCount)
    const quarterCommitCountData = Object.keys(quarterCommitCount).map(x => ({
      name: x,
      commits: quarterCommitCount[x],
    }))

    const {
      mostPopularRepository,
      longestRunningRepository,
      totalStars,
      totalForks,
      totalRepositories,
    } = this.state

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
            <Info>
              <Tooltip title={get(mostPopularRepository, 'name')}>
                <FontAwesomeIcon icon="info-circle" color="#C7C9CC" />
              </Tooltip>
            </Info>
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
            <Info>
              <Tooltip title={get(longestRunningRepository, 'name')}>
                <FontAwesomeIcon icon="info-circle" color="#C7C9CC" />
              </Tooltip>
            </Info>
          </InfoCard>
        </Group>

        <Group>
          <ChartWrapper>
            <ChartTitle>Commits per Quarter</ChartTitle>
            <AreaChart
              width={740}
              height={260}
              data={quarterCommitCountData}
              margin={{ top: 0, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip />
              <Area
                type="monotone"
                dataKey="commits"
                stroke="#239A3B"
                fill="#7BC86F"
              />
            </AreaChart>
          </ChartWrapper>
        </Group>

        <Group>
          <ChartWrapper>
            <ChartTitle>Repos per Language</ChartTitle>
            <PieChart width={360} height={220}>
              <Pie
                data={langRepoCountData}
                cx={200}
                cy={80}
                innerRadius={40}
                outerRadius={80}
                fill="#82ca9d"
              />
              <ChartTooltip />
              <Legend
                width={120}
                wrapperStyle={{
                  whiteSpace: 'nowrap',
                  overflow: 'auto',
                }}
                layout="vertical"
                verticalAlign="top"
                align="left"
              />
            </PieChart>
          </ChartWrapper>
          <ChartWrapper>
            <ChartTitle>Stars per Repo (top 10)</ChartTitle>
            <PieChart width={360} height={220}>
              <Pie
                data={repoStarCountData}
                cx={240}
                cy={80}
                innerRadius={40}
                outerRadius={80}
                fill="#82ca9d"
              />
              <ChartTooltip />
              <Legend
                width={120}
                wrapperStyle={{
                  whiteSpace: 'nowrap',
                  overflow: 'auto',
                }}
                layout="vertical"
                verticalAlign="top"
                align="left"
              />
            </PieChart>
          </ChartWrapper>
        </Group>
      </Card>
    )
  }
}

const ChartTitle = styled.div`
  text-align: left;
  font-size: 22px;
  font-weight: bold;
  margin: 16px 0;
`

const ChartWrapper = styled.div`
  flex: 1;
  padding-left: 16px;
`

const Info = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
`

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
  position: relative;
  font-size: 12px;
  flex: 1;
  padding: 15px;
  margin: 10px 0;
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
