import React, { useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import './Navbar.css'

function Navbar() {
    const[sticky,setsticky]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setsticky(true):setsticky(false);
        })
    },[])
    
    const [mobileMenu,setmobileMenu]=useState(false);

    const toogleMenu=()=>{
        mobileMenu?setmobileMenu(false):setmobileMenu(true);

    }
  return (
    <div>
    
        <nav className={`container ${sticky? 'dark-nav':''}`}>
        <p className='logo'><img className='nav-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOkZ0k64FjtwAhWnC1voKIsZzH4h7x0mLtMw&usqp=CAU'/>PublicUniversity</p>
        <div>
            <ul className={mobileMenu? '':'hide-mobile-menu'}>
                <li><Link to='hero'  smooth={true} offset={0}  duration={500} > Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260}  duration={500} > Program </Link></li>  
                <li><Link to='about'  smooth={true} offset={-150} duration={500} >  About us </Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260}  duration={500}>testimonial</Link></li>
                <li><Link className="btn" to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
            
            </ul>
    
        </div>
        <img className='menu-icon' onClick={toogleMenu} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWiJJvACXtElF-55liZJoqaVryFyT9Jny1Q&usqp=CAU' alt=''/>
        </nav>
        
    </div>
  )
}

export default Navbar