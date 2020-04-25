import React, { Component } from 'react'
import DropdownItem from './DropdownItem'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actionTypes from '../../../Actions/consts'

const Container = styled.div`
  display: inline-flex;
  background: #f9f9f9;
  width: 1000px;
  flex-wrap: none;
`

class Dropdown extends Component {
  state = {
    type: '',
    color: '',
    swetest: '',
    country: '',
    sort: '',
    region: '',
    taste: '',
    value: '',
  }
  data = [
    {
      name: 'Тип',
      onClick: this.typeChange,
      onChange: () => this.props.filtr('Громкое'),
      value: this.state.type,
      MenuItemData: [
        {
          name: 'Громкое',
          value: 'Громкое',
        },
        {
          name: 'Black',
          value: 20,
        },
      ],
    },
    {
      name: 'Цвет',
      onClick: this.colorChange,
      onChange: () => this.props.filtr('Чёрное'),
      value: this.state.color,
      MenuItemData: [
        {
          name: 'Чёрное',
          value: 'Чёрное',
        },
        {
          name: 'Black',
          value: 20,
        },
      ],
    },
    {
      name: 'Сладость',
      onClick: this.swetestChange,
      onChange: () => this.props.filtr('Сладкое'),
      value: this.state.swetest,
      MenuItemData: [
        {
          name: 'Сладкое',
          value: 'Сладкое',
        },
        {
          name: 'Black',
          value: 20,
        },
      ],
    },
    {
      name: 'Страна',
      onClick: this.countryChange,
      onChange: () => this.props.filtr('Испания'),
      MenuItemData: [
        {
          name: 'Испания',
          value: 'Испания',
        },
        {
          name: 'Black',
          value: 20,
        },
      ],
    },
    {
      name: 'Сорт',
      onClick: this.sortChange,
      onChange: () => this.props.filtr('Тихое'),
      value: this.state.sort,
      MenuItemData: [
        {
          name: 'Тихое',
          value: 'Тихое',
        },
        {
          name: 'Black',
          value: 20,
        },
      ],
    },
    {
      name: 'Регион',
      onClick: this.regionChange,
      onChange: () => this.props.filtr('Савойа'),
      value: this.state.region,
      MenuItemData: [
        {
          name: 'Савойа',
          value: 'Савойа',
        },
        {
          name: 'Black',
          value: 20,
        },
      ],
    },
    {
      name: 'Вкус',
      onClick: this.tasteChange,
      onChange: () => this.props.filtr('Лёгкое'),
      MenuItemData: [
        {
          name: 'Лёгкое',
          value: 'Лёгкое',
        },
        {
          name: 'Black',
          value: 20,
        },
      ],
    },
    {
      name: 'Объем',
      onClick: this.valueChange,
      onChange: () => this.props.filtr('850 мл'),
      value: this.state.value,
      MenuItemData: [
        {
          name: '850 мл',
          value: '850 мл',
        },
        {
          name: 'Black',
          value: 20,
        },
      ],
    },
  ]
  typeChange = (event) => {
    this.setState({ type: event.target.value })
  }
  colorChange = (event) => {
    console.log(event)
    this.setState({ color: event.target.value })
  }
  swetestChange = (event) => {
    console.log(event)
    this.setState({ swetest: event.target.value })
  }
  countryChange = (event) => {
    console.log(event)
    this.setState({ country: event.target.value })
  }
  sortChange = (event) => {
    console.log(event)
    this.setState({ sort: event.target.value })
  }
  regionChange = (event) => {
    console.log(event)
    this.setState({ region: event.target.value })
  }
  tasteChange = (event) => {
    console.log(event)
    this.setState({ taste: event.target.value })
  }
  valueChange = (event) => {
    console.log(event)
    this.setState({ value: event.target.value })
  }

  render() {
    const pad = { marginRight: '5%' }
    const width = { width: '100px' }
    return (
      <Container>
        {this.data.map((i) => (
          <DropdownItem
            pad={pad}
            width={width}
            value={i.value}
            onChange={i.onChange}
            MenuItemData={i.MenuItemData}
            name={i.name}
          />
        ))}
        <button
          style={{ height: '35px', marginTop: '1.5%', width: '110px' }}
          onClick={this.props.reRender}
        >
          Отмена
        </button>
      </Container>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    filtr: (item) => dispatch({ type: actionTypes.FILTR_CHOSE, value: item }),
    renderArr: () => dispatch({ type: actionTypes.DEFAULT_ARR }),
    reRender: () => dispatch({ type: actionTypes.DEFAULT_RENDER }),
  }
}

export default connect(null, mapDispatchToProps)(Dropdown)
