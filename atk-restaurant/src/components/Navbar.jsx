import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

function Navbar() {
  return (
      <Nav>
        
        <Logo to={"/"}>
        <h3>
          <GiKnifeFork/>
          Delicious Recipes
          <GiKnifeFork/>
          </h3>
        </Logo>
      </Nav>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`
const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
  h3{
    
  }
`

export default Navbar