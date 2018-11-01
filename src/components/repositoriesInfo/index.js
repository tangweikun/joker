import React from 'react'
import styled, { css } from 'styled-components'
import styles from './index.module.css'
import { Card } from 'components/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class RepositoriesInfo extends React.PureComponent {
  render() {
    return (
      <Card title="仓库概览" icon="chart-bar">
        <Group>
          <InfoCard>
            <MainText>
              <FontAwesomeIcon icon="star" color="green" />
              &nbsp; 555
            </MainText>
            <SubText>收获star数</SubText>
          </InfoCard>
          <InfoCard>
            <MainText>
              <FontAwesomeIcon icon="code-branch" color="green" />
              &nbsp; 555
            </MainText>
            <SubText>收获fork数</SubText>
          </InfoCard>
          <InfoCard isLastChild>
            <MainText>
              <FontAwesomeIcon icon="boxes" color="green" />
              &nbsp; 555
            </MainText>
            <SubText>创建的仓库数</SubText>
          </InfoCard>
        </Group>

        <Group>
          <InfoCard>
            <MainText>
              <FontAwesomeIcon icon="box" color="green" />
              &nbsp; 555
            </MainText>
            <SubText>最受欢迎的仓库</SubText>
          </InfoCard>
          <InfoCard isLastChild>
            <MainText>
              <FontAwesomeIcon icon="clock" color="green" />
              &nbsp; 555
            </MainText>
            <SubText>持续时间最久的仓库</SubText>
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
