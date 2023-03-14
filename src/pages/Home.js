import React from 'react'
import Banner from '../components/Banner'
import Introduction from '../components/Introduction'

function Home() {
  return (
    <>
    <Banner />
    <div className='background'>
        <div className='main'>
            <Introduction />
        </div>
    </div>
    </>
  )
}

export default Home