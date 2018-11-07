import React from 'react'
import styled from 'styled-components'
import copy from 'copy-to-clipboard'
import { colors } from 'fake-data/colors'
import { sleep } from 'utils/sleep'

export default class Rainbow extends React.Component {
  constructor(props) {
    super(props)
    this.queue = []
    this.count = 0
  }

  render() {
    return (
      <Wrapper>
        {this.queue.map(x => (
          <Notification
            key={x.key}
            text={`${x.color} copied to the clipboard 😁`}
            bg={x.color}
          />
        ))}

        {colors.map(color => (
          <BlockWrapper bg={color} key={color}>
            <Block
              onClick={async () => {
                copy(color)
                this.queue.unshift({ key: this.count++, color })
                this.forceUpdate()
                await sleep(2000)
                this.queue.pop()
                this.forceUpdate()
              }}
            >
              {color}
            </Block>
          </BlockWrapper>
        ))}
      </Wrapper>
    )
  }
}

class Notification extends React.Component {
  render() {
    return <Message bg={this.props.bg}>{this.props.text}</Message>
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 60px;
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

const Message = styled.div`
  position: fixed;
  left: 30px;
  top: 30px;
  width: 300px;
  height: 60px;
  line-height: 60px;
  background: ${props => props.bg || '#ff5a79'};
  color: #fff;
  z-index: 1000;
  user-select: none;
  border-radius: 4px;
  cursor: default;
  font-size: 16px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
`
