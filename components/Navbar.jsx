import React from 'react'
import ActiveLink from './ActiveLink'
import styles from './Navbar.module.css'

const Navbar = () => {
  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

  return (
    <nav className={ styles['menu-container'] }>
        {
          menuItems.map((item, index) => (
              <ActiveLink key={index} href={item.href} text={item.text} />
          ))
        }
    </nav>
  )
}

export default Navbar