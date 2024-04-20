import React from 'react'
import Card from './Card'

const CardContainer = () => {
  return (
    <div className='m-32 font-semibold text-xl'>
        <h2 className='my-10'>What excersise to follow ?</h2>
        <Card />
        <h2 className='my-10'>What excersise to Diet you should follow ?</h2>
        <Card />
        <h2 className='my-10'>Youtube recommendation</h2>
        <Card />
    </div>
  )
}

export default CardContainer