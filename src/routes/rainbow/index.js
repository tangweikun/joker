import React from 'react'
import styled, { keyframes } from 'styled-components'
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
          <Message key={x.key} bg={x.color}>{`${
            x.color
          } copied to the clipboard 😁`}</Message>
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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 60px;
  background: #f5f5f5;
`

const Block = styled.div`
  cursor: pointer;
  padding: 20px;
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
  box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
  transition: all 0.25s ease-out;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(168, 182, 191, 0.6);
    transform: translateY(-1px);
  }
`

const animScale = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0) scale3d(0.1, 0.6, 1);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
  }
`

const Message = styled.div`
  position: fixed;
  left: 30px;
  top: 30px;
  width: 320px;
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
  box-shadow: 0 25px 10px -15px rgba(0, 0, 0, 0.05);
  animation: 0.25s ${animScale} ease;
`
