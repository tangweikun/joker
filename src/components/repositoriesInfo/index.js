import React from 'react'
import { InfoCard, CardGroup } from 'building-block'
import styled from 'styled-components'
import { Card } from 'components/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import get from 'lodash/get'
import moment from 'moment'
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
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
        <CardGroup>
          <InfoCard subText="收获star数">
            <FontAwesomeIcon icon="star" color="green" />
            &nbsp; {totalStars}
          </InfoCard>
          <InfoCard subText="收获fork数">
            <FontAwesomeIcon icon="code-branch" color="green" />
            &nbsp; {totalForks}
          </InfoCard>
          <InfoCard subText="创建的仓库数">
            <FontAwesomeIcon icon="boxes" color="green" />
            &nbsp; {totalRepositories}
          </InfoCard>
        </CardGroup>

        <CardGroup>
          <InfoCard
            subText="最受欢迎的仓库"
            withTips
            tipsText={get(longestRunningRepository, 'name')}
          >
            <FontAwesomeIcon icon="box" color="green" />
            &nbsp;{' '}
            {get(mostPopularRepository, 'name', 'Something Terrible happened')}
          </InfoCard>
          <InfoCard
            subText="持续时间最长的仓库"
            withTips
            tipsText={get(mostPopularRepository, 'name')}
          >
            <FontAwesomeIcon icon="clock" color="green" />
            &nbsp;{' '}
            {moment(
              get(longestRunningRepository, 'created_at', new Date()),
            ).format('YYYY-MM-DD')}
            ~
            {moment(
              get(longestRunningRepository, 'updated_at', new Date()),
            ).format('YYYY-MM-DD')}
          </InfoCard>
        </CardGroup>

        <CardGroup>
          <ChartWrapper>
            <ChartTitle>Commits per Quarter</ChartTitle>
            <AreaChart
              width={740}
              height={260}
              data={quarterCommitCountData}
              margin={{ top: 10, right: 50, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="commits"
                stroke="#239A3B"
                fill="#7BC86F"
              />
            </AreaChart>
          </ChartWrapper>
        </CardGroup>

        <CardGroup>
          <ChartWrapper>
            <ChartTitle>Repos per Language</ChartTitle>
            <PieChart width={360} height={220}>
              <Pie
                data={langRepoCountData}
                dataKey="value"
                cx={200}
                cy={80}
                innerRadius={40}
                outerRadius={80}
                fill="#82ca9d"
              />
              <Tooltip />
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
                dataKey="value"
                cx={240}
                cy={80}
                innerRadius={40}
                outerRadius={80}
                fill="#82ca9d"
              />
              <Tooltip />
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
        </CardGroup>
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
