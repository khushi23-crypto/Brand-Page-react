import React from 'react'

function Navigation() {

  return (
    <>
    <div>
      <nav className='container'>
        <div className='logo'>
          <img src="/public/images/image.png" alt="Logo" />
        </div>
        <ul>
          <li href='#'>Menu </li>
          <li href='#'>Location </li>
          <li href='#'>About </li>
          <li href='#'>Contact Us </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
    </>
  )
}

export default Navigation