import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import styles from './Navbar.module.css'


const Navbar = () => {

  const [search, setSearch] = useState([])
  
  const navigate = useNavigate();

  const handleSbmit = (e) => {
      e.preventDefault()
      
      if(!search) return

      navigate(`/search?q=${search}`)
      setSearch("")
 
  }

  return (
    <nav className={styles.navbar}>
    <h2>
        <Link to={'/'} className={styles.item}><BiCameraMovie/> Best Films </Link>
    </h2>
    <form onSubmit={handleSbmit}>
        <input type="text"  placeholder='Busque um filme' onChange={(e) => setSearch(e.target.value)}
        value={search}/>
        <button className={styles.formbutton} type='submit'>
            <BiSearchAlt2/>
        </button>
    </form>
    </nav>
       
  )

}

export default Navbar