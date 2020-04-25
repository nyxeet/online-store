import React from 'react'
import { Link } from 'react-router-dom'

const text = {
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
  letterSpacing: '0.6px',
  color: '#000000',
}

const LinkBtn = ({ to, label, children }) => {
  return (
    <Link style={text} to={to}>
      {children}
      <span>{label}</span>
    </Link>
  )
}

export default LinkBtn
