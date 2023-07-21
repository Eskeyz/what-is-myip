import React from 'react'
import { Footer } from './components/Footer'
import Content from './components/Content'

const App = () => {
  return (
    <section className='text-white'>
      <div className='px-4 mx-auto max-w-screen-xl items-center text-center mt-[100px] lg:px-12'>
        <Content />
      </div>
      <Footer />
    </section>
  )
}

export default App