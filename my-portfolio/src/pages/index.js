import React from 'react'
import Navbar from './components/Navbar.js/Navbar'
import Banner from './components/Banner/Banner'

const index = () => {
  return (
<>
<section className='font-poppins'>
    <Navbar/>
   </section>
   <section>
    <Banner/>
   </section>
</>
  )
}

export default index