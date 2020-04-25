import React, { Component } from 'react'
import styled from 'styled-components'
import LinkBtn from '../LinkBtn/LinkBtn'
import './Footer.css'

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  height: 250px;
`

const FooterDiv = styled.div`
  width: 1200px;
  position: relative;
`
const Text = styled.span`
  height: 18px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  color: #000000;
  margin-left: 75px;
`

const FormInput = styled.input`
  width: 422px;
  height: 30px;
  border-radius: 4px;
  background-color: #ffffff;
  border: solid 1px #e3e3e3;
  padding: 5px;
`

const FormButton = styled.button`
  width: 272px;
  height: 42px;
  border-radius: 4px;
  background-color: #000000;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
  border: 0;
`

class Footer extends Component {
  render() {
    return (
      <Container>
        <FooterDiv>
          <ul className="UL">
            <li>
              <Text>
                <LinkBtn to="/about" label={'О нас'} />
              </Text>
            </li>
            <li>
              <Text>
                <LinkBtn to="contacts" label={'Контакты'} />
              </Text>
            </li>
            <li>
              <Text>
                <LinkBtn to="events" label={'Мероприятия'} />
              </Text>
            </li>
            <li>
              <Text>© 2020 TRE Biccheri. Все права защищены</Text>
            </li>
          </ul>
          <div className="corner">
            <Text>
              <LinkBtn to="/Vine" label={'Тихое вино'} />
            </Text>
            <Text>
              <LinkBtn to="/Alcohol" label={'Крепкий алкоголь'} />
            </Text>
            <Text>
              <LinkBtn to="/Accessories" label={'Аксессуары'} />
            </Text>
            <Text>
              <LinkBtn to="/Special_offers" label={'Специальные предложения'} />
            </Text>
          </div>
          <div className="cornerInput">
            <FormInput type="text" placeholder="Ваш email" />
            <FormButton>Подписаться на рассылку</FormButton>
          </div>
        </FooterDiv>
      </Container>
    )
  }
}

export default Footer
