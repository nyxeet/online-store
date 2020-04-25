import React, { Component } from 'react'
import styled from 'styled-components'
import LinkBtn from '../LinkBtn/LinkBtn'
import './Header.css'
import { withBaseIcon } from 'react-icons-kit'
import { magnifying_glass } from 'react-icons-kit/ikons/magnifying_glass'
import { shopping_bag } from 'react-icons-kit/ikons/shopping_bag'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderDiv = styled.div`
  width: 1200px;
  height: 57px;
  vertical-align: middle;
  padding: 2% 0 0 0;
  text-align: center;
  margin-top -1%;
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
  margin-right: 4%;
  &:hover {
    text-decoration: underline;
  }
`
const Ctext = styled.span`
  width: 131px;
  height: 17.3px;
  background-image: linear-gradient(266deg, #bf2128, #ffa797 54%, #ecd669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 28%;
  &:hover {
    text-decoration: underline;
  }
`

class Header extends Component {
  render() {
    const Icon = withBaseIcon({ size: 16, style: { color: '#DCDCDC' } })
    return (
      <Container>
        <HeaderDiv>
          <Ctext>
            <LinkBtn to="/" label={'TRF Bicchier'} />
          </Ctext>
          <Text>
            <LinkBtn to="/Vine" label={'Вино'} />
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
          <Icon style={{ margin: 10 }} icon={magnifying_glass} />
          <LinkBtn to="/shopping_bag">
            <Icon size={18} style={{ margin: 10 }} icon={shopping_bag} />
          </LinkBtn>
        </HeaderDiv>
      </Container>
    )
  }
}

export default Header
