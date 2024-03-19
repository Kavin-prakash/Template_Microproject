import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import *as FaIcons from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBug, faCartShopping, faUserPlus, faMessage, faTicket } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
 
 
const Home = () => {
 
 
    const [sidebar, setSidebar] = useState(false);
 
    const showsidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='container'>
                <div className='navbar'>
                    <a to="#" className='menu-bars' onClick={showsidebar} ><FaIcons.FaBars /></a>
                </div>
                {/* <a className='header-container'>ZaNdo GaMing and  EntertainMent HuB </a> */}
 
            </div>
 
            <div>
                <nav className={sidebar ? 'nav-menuactive' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li>
                        </li>
                        <li>
                            <a  className='nav-text '><FontAwesomeIcon icon={faHouse} /><span>Home</span></a>
                        </li>
                        <li>
                            <a  className='nav-text '><FontAwesomeIcon icon={faBug} /><span>Reports</span></a>
                        </li>
                        <li>
                            <a className='nav-text '><FontAwesomeIcon icon={faCartShopping} /><span>Products</span></a>
                        </li>
                        <li>
                            <a className='nav-text'><FontAwesomeIcon icon={faUserPlus} /><span>Team</span></a>
                        </li>
                        <li>
                            <a className='nav-text '><FontAwesomeIcon icon={faMessage} /><span>Messages</span></a>
                        </li>
                        <li>
                            <a className='nav-text '><FontAwesomeIcon icon={faTicket} /><span>Support</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='body-container'>
           
            </div>
 
 
            <div className='footer-container'>
 
            </div>
 
        </>
    )
}
 
 
export default Home;