import React from 'react'
import styles from '../Navbar/Navbar.module.css'
import Image from "next/image"
import logo from "../../app/favicon.ico";
const Navbar = () => {
  return (
  
       <nav className= {styles.navbar}>
            <ul className="flex">

              <logo className='logo'></logo>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
           
            </ul>
         </nav>
  
  )
}

export default Navbar
