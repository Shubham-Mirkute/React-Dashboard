import React from 'react'
import './Assets/Css/Navbar.css'
import { BsGrid1X2Fill, BsFillArchiveFill}from 'react-icons/bs'
import { IoIosArrowForward,IoIosArrowDown} from 'react-icons/io';
import { BiUserCircle,BiUpArrowCircle} from 'react-icons/bi';
import { RiQuestionnaireFill} from 'react-icons/ri';
import { PiUsersThreeBold} from 'react-icons/pi';
import { TbHexagonLetterO} from 'react-icons/tb';
import {GiWallet} from 'react-icons/gi'


const Navbar = ({openSidebarToggle}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <TbHexagonLetterO  className='icon_header'/> Dashboard
            </div>
        </div>
        <div className='sidebar-content'>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsGrid1X2Fill className='icon'/> Dashboard <IoIosArrowForward/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsFillArchiveFill className='icon'/> Products <IoIosArrowForward/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <PiUsersThreeBold className='icon'/> Customers <IoIosArrowForward/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <GiWallet className='icon'/> Income <IoIosArrowForward/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BiUpArrowCircle className='icon'/> Promote<IoIosArrowForward/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <RiQuestionnaireFill className='icon'/> Help <IoIosArrowForward/>
                </a>
            </li>
        </ul>
        <li className='sidebar-user-deatails'>
                <a href="/">
                    <div className='user-tile'>
                        <BiUserCircle className='user-icon'/>
                    
                            <div >
                                <h4 className='user-name'>Shubham</h4>
                                <h6 className='user-post'>Project Manager</h6>
                            </div>
                            <IoIosArrowDown/>
                    </div>
            
                </a>
            </li>
        </div>
    </aside>
  )
}
export default Navbar
