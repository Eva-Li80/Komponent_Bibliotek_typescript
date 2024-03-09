import React from 'react'

type NavigationBar = {
    links: { text: string; url: string }[];
    className?: string
    classNamee?: string
}

const NavigationBar = ({links, className, classNamee}:NavigationBar) => {
  return (
    <div className='navigation-container'>
      <nav>
        <ul className={className}>
        {links.map((link, index) => (
          <li className={classNamee} key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
        </ul>
      </nav>
      
    </div>
  )
}

export default NavigationBar
