import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import {SidebarData} from './SidebarData';


function Navbar() {
    return (
        <>
            <aside className='menu'>
                <ul className='menu-list'>
                    {SidebarData.map((item,index)=>{
                        return(
                            <li 
                            key={index} className={item.className}
                            onClick={()=>{
                                window.location.pathname=item.location;
                            }} 
                            >
                                <span class="icon-text">
                                    <span class="icon">
                                        <div>
                                            {item.icon}
                                        </div>
                                    </span>
                                    <span>{item.title}</span>
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </>
    )
}

export default Navbar;
