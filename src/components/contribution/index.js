import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { Tooltip } from 'building-block'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from 'components/card'

export class Contribution extends PureComponent {
  render() {
    return (
      <Card title="活跃度" icon="award">
        <Group>
          <InfoCard>
            <MainText>TODO:</MainText>
            <SubText>历史总提交数</SubText>
            <Info>
              <Tooltip title="TODO:">
                <FontAwesomeIcon icon="info-circle" color="#C7C9CC" />
              </Tooltip>
            </Info>
          </InfoCard>
          <InfoCard>
            <MainText>TODO:</MainText>
            <SubText>提交数目最多的一天</SubText>
            <Info>
              <Tooltip title="TODO:">
                <FontAwesomeIcon icon="info-circle" color="#C7C9CC" />
              </Tooltip>
            </Info>
          </InfoCard>
        </Group>

        <Group>
          <InfoCard>
            <MainText>TODO:</MainText>
            <SubText>最长连击天数</SubText>
            <Info>
              <Tooltip title="TODO:">
                <FontAwesomeIcon icon="info-circle" color="#C7C9CC" />
              </Tooltip>
            </Info>
          </InfoCard>
          <InfoCard>
            <MainText>TODO:</MainText>
            <SubText>当前连击天数</SubText>
            <Info>
              <Tooltip title="TODO:">
                <FontAwesomeIcon icon="info-circle" color="#C7C9CC" />
              </Tooltip>
            </Info>
          </InfoCard>
          <InfoCard isLastChild>
            <MainText>TODO:</MainText>
            <SubText>平均每天提交次数</SubText>
            <Info>
              <Tooltip title="TODO:">
                <FontAwesomeIcon icon="info-circle" color="#C7C9CC" />
              </Tooltip>
            </Info>
          </InfoCard>
        </Group>
      </Card>
    )
  }
}

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
