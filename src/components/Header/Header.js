import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

const Header = () => {
  return (
    <header className=''>
      <Navbar />
      <Banner />
      
      <div className='absolute min-w-full h-[100vh]  lg:min-w-auto -z-10 top-0 right-0'>
        <div className='bg-gradient-to-t from-[#061C35] absolute w-full h-[100vh]'></div>
        <img src="/images/banner.png" className='object-cover object-center h-[100vh] lg:h-full w-full lg:w-auto lg:ml-auto' />
      </div>
    </header>
  )
}

export default Header