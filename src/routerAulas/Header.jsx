import React from 'react'
import { NavLink } from 'react-router-dom'
import'./Header.css'

const Header = () => {
  return (
    <nav>
      <NavLink to={'/'} end>HOme</NavLink> | <NavLink to={'sobre'}>Sobre</NavLink> | <NavLink to={'login'}>login</NavLink>
    </nav>
  )
}

export default Header
