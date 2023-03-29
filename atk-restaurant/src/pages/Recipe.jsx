import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function Recipe() {

  let params = useParams()
  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
},[params.name])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="details"/>
      </div>
      <Info>
        <Button>Instructions</Button>
        <Button>Ingredients</Button>
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.DetailWrapper`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #C8B282, #A67B5C);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: brown;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`
const Info = styled.DetailWrapper`
  margin-left: 10rem;
`

export default Recipe