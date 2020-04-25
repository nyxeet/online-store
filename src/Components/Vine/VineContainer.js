import React, { Component } from 'react'
import styled from 'styled-components'
import BestVineArr from '../../Assets/Vine/Vine'
import LinkBtn from '../LinkBtn/LinkBtn'
import { connect } from 'react-redux'
import * as actionTypes from '../../Actions/consts'

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

const Div = styled.div`
  text-align: center;
  width: 250px;
  margin: 1%;
  padding: 0.5%;
`

const Img = styled.img`
  width: 80px;
  height: 300px;
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

class VineContainer extends Component {
  componentWillMount() {
    this.props.renderArr()
  }
  render() {
    const vine = this.props.vineArr.map((el, index) => {
      return (
        <Div key={index} onClick={() => localStorage.setItem('items', index)}>
          <LinkBtn to={`/Vin/${el.id}`} label={el.name}>
            <Img src={el.src} />
            <br />
          </LinkBtn>
        </Div>
      )
    })
    return (
      <Container>
        <ContainerIn>
          <Containervine>{vine}</Containervine>
        </ContainerIn>
      </Container>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    renderArr: () => dispatch({ type: actionTypes.DEFAULT_ARR }),
  }
}
const mapStateToProps = (state) => {
  return {
    vineArr: state.vineAfter,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VineContainer)
