import React,{useState} from 'react'
import './Assets/Css/Dashboard.css'
import {BsSearch, BsJustify} from 'react-icons/bs'
import {PiHandWaving} from 'react-icons/pi'
import {TbShoppingBag} from 'react-icons/tb'
import {FaCircleDollarToSlot} from 'react-icons/fa6'
import {BiUpArrowAlt,BiDownArrowAlt} from 'react-icons/bi'
import {IoNewspaperOutline} from 'react-icons/io5'
import {GiWallet} from 'react-icons/gi'
import { Charts } from './Charts'


const Dashboard = ({OpenSidebar}) => {
    const [selectedOption, setSelectedOption] = useState('option2');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
    return (
        <>
        <header className='header'>
            <div className='menu-icon' >
                <BsJustify className='icon-Dashboard' onClick={OpenSidebar}/>
            </div>
            <div className='header-left'>
                <p style={{color:'black'}}>hello Shubham <PiHandWaving className='icon-Dashboard hello'/></p>
            </div>
            <div className='header-right '>
                <input placeholder='search' className='SearchBar' />
                <BsSearch  className='icon-Search'  />  
            </div>
        </header>
        <main className='main-container'>
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <div className='icon-background i1'>
                            <FaCircleDollarToSlot className='card_icon'/>
                        </div>
                        <div>
                            <h6>Earnings</h6>
                            <h4>$198k</h4>
                            <h6><span className='Rise'><BiUpArrowAlt className='Arrows'/>37.8% </span>this month</h6>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <div className='icon-background i2'>
                            <IoNewspaperOutline className='card_icon'/>
                        </div>
                        <div>
                            <h6>Order</h6>
                            <h4>$2.4k</h4>
                            <h6> <span className='Drop'><BiDownArrowAlt className='Arrows'/>2%</span> this month</h6>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <div className='icon-background i3'>
                            <GiWallet className='card_icon'/>
                        </div>
                        <div>
                            <h6>Balance</h6>
                            <h4>$2.4k</h4>
                            <h6> <span className='Drop'><BiDownArrowAlt className='Arrows'/>2%</span> this month</h6>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <div className='icon-background i4'>
                            <TbShoppingBag className='card_icon'/>
                        </div>
                        <div>
                            <h6>Total Sales</h6>
                            <h4>$89k</h4>
                            <h6><span className='Rise'><BiUpArrowAlt className='Arrows'/> 11%</span> this month</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Charts/>
            </div>
            <div className='Product-table'>
            <header className='Product-table-header'>
                <div className='table-title'><h3>Product sell</h3></div>
                <div className='Product-table-header-right'>
                    <div className='table-header-right '>
                        <input placeholder='search' className='table-SearchBar' />
                        <BsSearch  className='icon-Search'  />  
                        </div>
                        <select className='Dropdown' value={selectedOption} onChange={handleDropdownChange}>
                            <option value="option1">Last 7 days</option>
                            <option value="option2">Last 30 days</option>
                            <option value="option3">Last 3 months</option>
                        </select>
                    
                </div>
            </header>
            <div className='table-content-heading'>
                <div class="grid-table">
                <div class="table-header">Product Name</div>
                <div class="table-header">Stock</div>
                <div class="table-header">Price</div>
                <div class="table-header">Total Sales</div>

                
                <div class="table-row">
                    <div className='table-inner'>
                        <div className='Product_icon'>
                            <img className='Product_icon' src="https://picsum.photos/id/1/200/300" alt="" />
                        </div>
                        <div>
                            <h4>Abstract 3D</h4>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        </div>
                    </div>
                </div>
                <div class="table-row">32 in stock</div>
                <div class="table-row">$ 45.99</div>
                <div class="table-row">20</div>
                
                <div class="table-row">
                    <div className='table-inner'>
                    <div className='Product_icon'>
                            <img className='Product_icon' src="https://picsum.photos/id/1/200/300" alt="" />
                        </div>
                        <div>
                        <h4>Abstract 3D</h4>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        </div>
                    </div>
                </div>
                <div class="table-row">32 in stock</div>
                <div class="table-row">$ 45.99</div>
                <div class="table-row">20</div>

                <div class="table-row">
                <div className='table-inner'>
                <div className='Product_icon'>
                            <img className='Product_icon' src="https://picsum.photos/id/1/200/300" alt="" />
                        </div>
                        <div>
                        <h4>Abstract 3D</h4>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        </div>
                    </div>
                </div>
                <div class="table-row">32 in stock</div>
                <div class="table-row">$ 45.99</div>
                <div class="table-row">20</div>

                
            </div>
            </div>
            </div>
        </main>
        </>
        )
    }       
export default Dashboard