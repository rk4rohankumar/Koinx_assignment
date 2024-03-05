import React from 'react'
import BitcoinChart from './BitcoinChart'

const Bitcoin = () => {
  const b = ">>"
  const a = <p className='text-2xl font-bold'>Bitcoin</p>
  return (
    <div>
      <h1 className='text-xl   ml-16 my-5'>Cryptocurrencies{b} {a}</h1>
      <div className='w-8/12 mx-16 rounded-lg'>
        <BitcoinChart />
      </div>
    </div>
  )
}

export default Bitcoin
