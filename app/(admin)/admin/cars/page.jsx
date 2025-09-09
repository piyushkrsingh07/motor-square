import React from 'react'
import Carlist from './_components/car-list'


export const metadata={
    title:"Cars|Vehiql Admin",
    description:'Manage cars in your marketplace'
}
const CarsPage = () => {
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-6 mt-4'>Cars Management</h1>
      <Carlist/>
    </div>
  )
}

export default CarsPage
