import React from 'react'
import { connect } from 'react-redux'

const Bascket = (props) => {
  return <div></div>
}

const mapStateToProps = (state) => {
  return {
    vineArr: state.vine,
    bascket: state.bascket,
  }
}

export default connect(mapStateToProps)(Bascket)
