import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'
import { Link } from 'react-router-dom'
import { CSS_PROPERTIES } from 'fake-data/css-properties/index'
import { COLORS } from 'fake-data/colors'

export default class KnowledgeGraph extends React.Component {
  render() {
    const category = this.props.match.params.number || 'positioning'
    const properties = get(CSS_PROPERTIES, category, [])

    return (
      <React.Fragment>
        <Sidebar>
          {Object.keys(CSS_PROPERTIES).map(x => (
            <SidebarItem key={x}>
              <StyledLink to={`/knowledge-graph/${x}`}>{x}</StyledLink>
            </SidebarItem>
          ))}
        </Sidebar>

        <Content>
          <Title>{category}</Title>
          <Wrapper>
            {properties.map((x, index) => (
              <BlockWrapper key={x.name} bg={COLORS[index % 20]}>
                <Name>{x.name}</Name>
                <Values>
                  {x.values.map(value => (
                    <Value key={value}>{value}</Value>
                  ))}
                </Values>
              </BlockWrapper>
            ))}
          </Wrapper>
        </Content>
      </React.Fragment>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Name = styled.div`
  color: #77e756;
  font-size: 30px;
`

const Values = styled.div`
  color: #fff;
  font-size: 22px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
`

const Value = styled.span`
  &:not(:first-child) {
    margin-left: 4px;
  }
  &:not(:last-child)::after {
    content: ' | ';
  }
`

const BlockWrapper = styled.div`
  background: ${props => props.bg};
  padding: 10px;
  min-width: 340px;
  color: #fff;
  font-size: 20px;

  height: 100px;
  border-radius: 4px;
  margin: 20px;
  box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
  transition: all 0.25s ease-out;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(168, 182, 191, 0.6);
    transform: translateY(-1px);
  }
`

const Title = styled.h1`
  color: rgb(243, 182, 97);
  font-weight: bold;
  text-transform: capitalize;
`

const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 56px;
  bottom: 0;
  width: 300px;
  background: rgb(239, 239, 239);
  font-size: 22px;
  padding: 10px 0 0 40px;
`

const Content = styled.div`
  width: 100%;
  padding-left: 340px;
  padding-top: 40px;
  margin: 0 auto;
`

const SidebarItem = styled.div`
  height: 48px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #556272;
  display: inline-block;
  padding: 4px 8px;
  font-size: 20px;
  text-transform: capitalize;
  border-radius: 4px;

  :hover {
    background: rgba(20, 20, 20, 0.1);
  }
`
