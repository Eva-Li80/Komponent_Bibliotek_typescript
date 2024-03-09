import React from 'react'

type HeaderProps = {
  text: string
}

const Header = ({text} : HeaderProps) => {
  return (
    <div className='header-container'>
      <h1 className='title'>{text}</h1>
    </div>
  )
}

export default Header
