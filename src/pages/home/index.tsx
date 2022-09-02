import React from 'react'

import Logo from 'assets/images/react-logo.svg'

import 'scss/homepage.scss'

const Home = () => {
  return (
    <div id='home'>
      <div id='logo-container'>
        <Logo id='logo' />
      </div>
      <div className='text-container'>
        <h2>
          Edit <code>src/pages/home/index.tsx</code> to get started.
        </h2>
        <h3>
          <span role='img' aria-label='emoji'>
            🚀
          </span>
        </h3>
      </div>
    </div>
  )
}

export default Home
