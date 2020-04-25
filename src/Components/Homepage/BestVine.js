import React, { Component } from 'react'
import styled from 'styled-components'
import BestVineArr from '../../Assets/Vine/Vine'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 2% 0;
`

const ContainerIn = styled.div`
  width: 1200px;
  display: inline-flex;
  flex-wrap: wrap;
  height: auto;
`

const Caption = styled.h1`
  width: 245px;
  height: 34px;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.2px;
  color: #a1a1a1;
`

const Div = styled.div`
  text-align: center;
  width: 250px;
  margin-top: 20px;
`

const Img = styled.img`
  width: 80px;
  height: 300px;
`

const Name = styled.span`
  width: 180px;
  height: 52px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.86;
  letter-spacing: 0.4px;
  text-align: center;
  color: #000000;
  margin-top: 10px;
`

const Containervine = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const VineMod = BestVineArr.map((el, index) => {
  return (
    <Div key={index}>
      <Img src={el.src} />
    </Div>
  )
})
class Bestvine extends Component {
  render() {
    const vine = BestVineArr.map((el, index) => {
      return (
        <Div key={index}>
          <Img src={el.src} />
          <br />
          <Name>{el.name}</Name>
        </Div>
      )
    })
    vine.length = 8
    return (
      <Container>
        <ContainerIn>
          <Caption>Наши хиты</Caption>
          <Containervine>{vine}</Containervine>
        </ContainerIn>
      </Container>
    )
  }
}
export default Bestvine
