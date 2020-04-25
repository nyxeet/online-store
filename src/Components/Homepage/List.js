import React, { Component } from 'react'
import styled from 'styled-components'
import { VineMod } from './BestVine'
import { bottle } from '../../Utilits/Animations'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 618px;
  background-color: #f9f9f9;
`

const ContainerIn = styled.div`
  width: 1200px;
`

const Caption = styled.h1`
  width: 680px;
  height: 50px;
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.39;
  letter-spacing: 0.7px;
  color: #000000;
`

const Paragraph = styled.p`
  width: 272px;
  height: 52px;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.73;
  letter-spacing: 0.2px;
  color: #6a6a6a;
`

const Button = styled.button`
  width: 52px;
  height: 45px;
  background-color: #000000;
  margin: 10% 1.5% 0 0;
  border: 0;
`

const Best = styled.div`
  transform: scale(1.7, 1.7);
  position: absolute;
  right: 30%;
  animation: ${bottle} 300ms linear;
`

class List extends Component {
  state = {
    number: 0,
  }
  numberHandlePlus = () => {
    this.setState({ number: this.state.number + 1 })
  }
  numberHandleMinus = () => {
    this.setState({ number: this.state.number - 1 })
  }
  render() {
    let best = <Best>{VineMod[this.state.number]}</Best>
    return (
      <Container>
        <ContainerIn>
          <Caption>Коллекция Shannon</Caption>
          <Paragraph>
            Рады представить новую коллекцию замечательного Shannon.
          </Paragraph>
          <strong>Перейти в каталог</strong>
          <br />
          <Button
            disabled={this.state.number === 0 ? true : false}
            onClick={this.numberHandleMinus}
          >
            <img
              src={require(`../../Assets/Arrow/arrow-left.png`)}
              alt="arrow"
            />
          </Button>
          <Button
            disabled={this.state.number === 7 ? true : false}
            onClick={this.numberHandlePlus}
          >
            <img
              src={require(`../../Assets/Arrow/arrow-right.png`)}
              alt="arrow"
            />
          </Button>
        </ContainerIn>
        {best}
      </Container>
    )
  }
}
export default List
