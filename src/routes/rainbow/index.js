import React from 'react'
import styled from 'styled-components'
import copy from 'copy-to-clipboard'

const colors = Array.from(
  new Set([
    '#DB7094',
    '#9134DC',
    '#FF7381',
    '#3FC4FE',
    '#FF9D45',
    '#8DD843',
    '#FB584A',
    '#FFE55F',
    '#00E676',
    '#00A9F0',
    '#80DEEA',
    '#F74D5F',
    '#77E756',
    '#FFCE49',
    '#F94E43',
    '#FA9A3F',
    '#FF7381',
    '#38C1F1',
    '#8DC449',
    '#80DEEA',
    '#FFB64D',
    '#536DFE',
    '#C5E763',
    '#EF5351',
    '#00E676',
    '#38C1F1',
    '#63B5F5',
    '#FF5A79',
    '#CEDAE6',
    '#77E756',
    '#00CBE8',
    '#00E676',
    '#FFC303',
    '#E7F4FF',
    '#FFCE49',
    '#A78674',
    '#57D0D8',
    '#FCD0AD',
    '#C5E763',
    '#7F39FB',
  ]),
)

export default class Rainbow extends React.Component {
  render() {
    return (
      <Wrapper>
        {colors.map(x => (
          <BlockWrapper key={x} bg={x}>
            <Block onClick={() => copy(x)}>{x}</Block>
          </BlockWrapper>
        ))}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background: #f5f5f5;
`

const Block = styled.div`
  cursor: pointer;
`

const BlockWrapper = styled.div`
  background: ${props => props.bg};

  min-width: 180px;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 240px;
  border-radius: 4px;
  margin: 20px;
`
