import React, { Component } from 'react'
import styled from 'styled-components'
import LinkBtn from '../../LinkBtn/LinkBtn'
import Modal from 'react-modal'
import './VinePage.css'
import { connect } from 'react-redux'
import * as actionTypes from '../../../Actions/consts'
import { initialState } from '../../../Reducers/VineCollection'
const ContainerGray = styled.div`
  position: absolute;
  padding: 0.01% 0;
  background: #f9f9f9;
  width: 100%;
`
const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  item-align: center;
  background-color: white;
  flex-wrap: wrap;
`
const ImgContainer = styled.div`
  position: absolute;
  margin: 3% 0 0 10%;
`
const Caption = styled.span`
  width: 81px;
  height: 26px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.86;
  letter-spacing: 0.2px;
  color: #000000;
`
const CaptionItem = styled.p`
  width: 325px;
  height: 72px;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.8px;
  color: #000000;
`
const Container = styled.div`
  width: 1200px;
`
const Text = styled.p`
  width: 518px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.86;
  letter-spacing: 0.2px;
  color: #5e5e5e;
  word-wrap: break-word;
`
const RightSide = styled.div`
  width: 50%;
  margin-left: 50%;
`
const Ul = styled.ul`
  list-style: none;
  width: 500px;
  margin-left: -7%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Li = styled.li`
  float: left;
  margin: 20px 50px 0 0;
`
const CaptionG = styled.h1`
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
const Lip = styled.p`
  width: 35px;
  height: 26px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.86;
  letter-spacing: 0.2px;
  color: #989898;
`
const CountInfo = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 250px;
  margin-top: 20px;
`
const CounterContainer = styled.div`
  width: 90px;
  height: 40px;
  border-radius: 4px;
  background-color: #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Button = styled.button`
  width: 272px;
  height: 50px;
  border-radius: 4px;
  background-image: linear-gradient(to right, #da605e, #c53237);
  text-align: center;
  vertical-align: middle;
  border: 0;
  margin-top: 20px;
`
const ButtonText = styled.span`
  width: 202px;
  height: 18px;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  text-align: center;
  color: #ffffff;
`

class VinePage extends Component {
  state = {
    sum: 1,
    open: false,
  }

  openModal = () => {
    this.setState({ open: true })
  }
  closeModal = () => {
    this.setState({ open: false })
  }
  increaseHandler = () => {
    this.setState({ sum: this.state.sum + 1 })
  }
  decreaseHandler = () => {
    this.setState({ sum: this.state.sum - 1 })
  }
  componentWillMount() {
    Modal.setAppElement('body')
  }

  render() {
    const width = { width: '100%' }
    const height = { height: '700px' }
    const margin = { marginTop: '2%' }
    const marginB = { transform: 'translateY(-300px)' }
    const size = { fontSize: '20px' }
    const index = localStorage.getItem('items')
    return (
      <ContainerPage>
        <ContainerGray></ContainerGray>
        <Container style={height}>
          <LinkBtn to="/Vine">
            <img
              alt="arrow"
              src={require('../../../Assets/Arrow/miniArrow.svg')}
            />{' '}
            <Caption>Вино</Caption>
          </LinkBtn>
          <ImgContainer>
            <img
              width="151px"
              height="559px"
              src={initialState.vine[index].src}
              alt="vine"
            />
          </ImgContainer>
          <RightSide>
            <br />
            <CaptionItem>{initialState.vine[index].fullName}</CaptionItem>
            <Text>{initialState.vine[index].des}</Text>
            <strong>Узнать больше</strong>
            <br />
            <CountInfo>
              <strong style={{ fontSize: '20px', marginTop: '3.5%' }}>
                {initialState.vine[index].cost * this.state.sum} грн
              </strong>
              <span style={{ marginTop: '5%' }}>
                {' '}
                {initialState.vine[index].value}
              </span>
              <CounterContainer>
                <span
                  style={{ marginLeft: '10%', fontSize: '20px' }}
                  onClick={this.state.sum === 1 ? null : this.decreaseHandler}
                >
                  -
                </span>
                <span style={{ fontSize: '20px' }}>{this.state.sum}</span>
                <span
                  style={{ fontSize: '20px', marginRight: '10%' }}
                  onClick={this.increaseHandler}
                >
                  +
                </span>
              </CounterContainer>
            </CountInfo>
            <br />
            <Button onClick={this.openModal}>
              <ButtonText>Добавить в корзину</ButtonText>
            </Button>
            <Ul>
              <Li>
                <Lip>Тип</Lip>
                <p>{initialState.vine[index].type}</p>
              </Li>
              <Li>
                <Lip>Цвет</Lip>
                <p>{initialState.vine[index].color}</p>
              </Li>
              <Li>
                <Lip>Сладость</Lip>
                <p>{initialState.vine[index].sweet}</p>
              </Li>
              <Li>
                <Lip>Страна</Lip>
                <p>{initialState.vine[index].country}</p>
              </Li>
              <Li>
                <Lip>Сорт</Lip>
                <p>{initialState.vine[index].sort}</p>
              </Li>
              <Li>
                <Lip>Регион</Lip>
                <p>{initialState.vine[index].region}</p>
              </Li>
              <Li>
                <Lip>Вкус</Lip>
                <p>{initialState.vine[index].taste}</p>
              </Li>
            </Ul>
          </RightSide>
        </Container>
        <Container style={margin}>
          <CaptionG>Описание</CaptionG>
          <br />
          <Text style={width}>{initialState.vine[index].fullDes}</Text>
        </Container>
        <Container style={margin}>
          <CaptionG>Производитель</CaptionG>
          <br />
          <img
            src={initialState.vine[index].prodImg}
            width="581px"
            height="386px"
            alt="ProdImg"
          />
          <RightSide style={marginB}>
            <CaptionItem>{initialState.vine[index].prod}</CaptionItem>
            <Text>{initialState.vine[index].prodDes}</Text>
          </RightSide>
        </Container>
        <Modal
          isOpen={this.state.open}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className="modal"
        >
          <div className="inmodal">
            <img
              alt="arrow"
              src={require('../../../Assets/Arrow/miniArrow.svg')}
            />{' '}
            <strong>Корзина</strong>
            <hr />
            <img
              width="38px"
              height="139px"
              src={initialState.vine[index].src}
              alt="vine"
              className="modal-img"
            />
            <CaptionItem className="close-item" onClick={this.closeModal}>
              X
            </CaptionItem>
            <div className="modal-counter">
              <p className="Shanon">{initialState.vine[index].fullName}</p>
              <CountInfo>
                <CounterContainer>
                  <span
                    style={{ marginLeft: '10%', fontSize: '20px' }}
                    onClick={this.state.sum === 1 ? null : this.decreaseHandler}
                  >
                    -
                  </span>
                  <span style={{ fontSize: '20px' }}>{this.state.sum}</span>
                  <span
                    style={{ marginRight: '8%', fontSize: '20px' }}
                    onClick={this.increaseHandler}
                  >
                    +
                  </span>
                </CounterContainer>
                <span style={{ marginTop: '5%' }}>
                  {' '}
                  {initialState.vine[index].value}
                </span>
                <strong style={{ marginTop: '3.5%', fontSize: '20px' }}>
                  {initialState.vine[index].cost * this.state.sum} грн
                </strong>
              </CountInfo>
            </div>
            <div className="bottom-side">
              <hr />
              <Caption>Итого</Caption>
              <strong style={size} className="marginR">
                {initialState.vine[index].cost * this.state.sum} грн
              </strong>
              <LinkBtn to="/Order">
                <Button className="modal-button">
                  <ButtonText>Оформить заказ</ButtonText>
                </Button>
              </LinkBtn>
            </div>
          </div>
        </Modal>
      </ContainerPage>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveItem: () => dispatch({ type: actionTypes.RECEIVE_ITEM }),
  }
}

export default connect(null, mapDispatchToProps)(VinePage)
