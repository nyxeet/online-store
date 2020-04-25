import React, { Component } from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown/Dropdown'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 0;
  background: #f9f9f9;
`

const ContainerIn = styled.div`
  width: 1166px;
  display: inline-flex;
  flex-wrap: wrap;
  height: auto;
`

const Caption = styled.h1`
  width: 245px;
  height: 36px;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.2px;
  color: #000000;
`
class VineMenu extends Component {
  state = {
    age: '',
    open: false,
  }
  handleChange = (event) => {
    this.setState({ age: event.target.value })
  }
  render() {
    return (
      <Container>
        <ContainerIn>
          <Caption>Вино</Caption>
          <br />
          <Dropdown />
        </ContainerIn>
      </Container>
    )
  }
}

export default VineMenu
