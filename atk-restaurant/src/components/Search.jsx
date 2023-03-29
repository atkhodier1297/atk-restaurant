import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {

  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate("/searched/" + input)
  }

  //console.log(input)

  return (
    <FormStyle onSubmit={submitHandler}>
        <FaSearch/>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 4rem 2rem;
    position: relative;

    input{
        border: none;
        background: linear-gradient(35deg, #C8B282, #A67B5C);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 2rem;
        outline: none;
        width: 100%;
       
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search