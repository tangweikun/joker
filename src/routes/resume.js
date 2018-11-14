import React from 'react'
import styled from 'styled-components'
import {
  RESUME_BASIC_INFO,
  RESUME_EDUCATION,
  RESUME_WORK_EXPERIENCE,
} from 'fake-data/resume'

export default class Resume extends React.Component {
  render() {
    const {
      name,
      age,
      workYears,
      description,
      mobile,
      email,
    } = RESUME_BASIC_INFO

    return (
      <Wrapper>
        <BasicInfo>
          <Name>{name}</Name>
          <Description>{description}</Description>

          <BasicInfoDetails>
            <Age>{`${age}岁`}</Age>
            &nbsp;&nbsp;
            <Age>{`工作${workYears}年`}</Age>
            &nbsp;&nbsp;
            <Age>{mobile}</Age>
            &nbsp;&nbsp;
            <Age>{email}</Age>
          </BasicInfoDetails>
        </BasicInfo>

        <Education />

        <WorkExperience />
      </Wrapper>
    )
  }
}

const BasicInfoDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`

const Wrapper = styled.div`
  width: 820px;
  margin: 20px auto;
  background: #fff;
  line-height: 1.5;
  font-family: Microsoft YaHei;
`

const BasicInfo = styled.div`
  width: 100%;
  padding: 25px 30px;
`

const Name = styled.div`
  font-size: 30px;
  font-family: Microsoft YaHei;
`

const Age = styled.div`
  color: #657180;
  font-size: 15px;
  line-height: 1;

  &:not(:last-child)::after {
    content: ' |';
  }
`

const Description = styled.div`
  color: #657180;
  font-size: 16px;
`

const ItemWrapper = styled.div`
  padding: 5px 0;
  margin: 0 30px;
`

const ItemHeader = styled.div`
  height: 45px;
  line-height: 45px;
  padding-bottom: 13px;
  border-bottom: 1px solid #0b70bd;
  color: #0b70bd;
  font-size: 18px;
  font-weight: bold;
`

const ItemContent = styled.div`
  padding: 18px 0 20px;
  display: flex;
`

const ItemCell = styled.div`
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;
  min-width: 250px;
`

class Education extends React.Component {
  render() {
    const { duration, school, major } = RESUME_EDUCATION
    return (
      <ItemWrapper>
        <ItemHeader>教育背景</ItemHeader>
        <ItemContent>
          <ItemCell>{duration}</ItemCell>
          <ItemCell>{school}</ItemCell>
          <ItemCell>{major}</ItemCell>
        </ItemContent>
      </ItemWrapper>
    )
  }
}

class WorkExperience extends React.Component {
  render() {
    return (
      <ItemWrapper>
        <ItemHeader>工作经验</ItemHeader>
        {RESUME_WORK_EXPERIENCE.map((x, index) => (
          <div key={index}>
            <ItemContent>
              <ItemCell>{x.duration}</ItemCell>
              <ItemCell>{x.company}</ItemCell>
              <ItemCell>{x.position}</ItemCell>
            </ItemContent>

            <ItemDetail>
              {x.duties.map((y, index) => (
                <div key={index}>{y}</div>
              ))}
            </ItemDetail>
          </div>
        ))}
      </ItemWrapper>
    )
  }
}

const ItemDetail = styled.div`
  padding-bottom: 20px;
  font-size: 14px;
`
