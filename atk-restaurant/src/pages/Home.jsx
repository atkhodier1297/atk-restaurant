import React from 'react'
import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import Dessert from '../components/Dessert'

function Home() {
  return (
    <div>
      <Popular/>
      <Veggie/>
      <Dessert/>
    </div>
  )
}

export default Home