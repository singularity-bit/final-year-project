import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import {SidebarData} from './SidebarData';
import {Link,BrowserRouter} from 'react-router-dom';
import './Sidebar.css';



function Sidebar() {
    const [active,setActive]=useState(SidebarData[0].title);

    const activeStyle='has-text-link has-text-weight-bold has-background-link-light';
    const defaultStyle='';

    const [activeClass,setActiveClass]=useState(defaultStyle);

    const clickMenuHandler=name=>{
        setActive(name);
    }
    const activateClass=name=>{
        setActiveClass(name);
    }
    const menuItems=
        SidebarData.map((item,index)=>{
        
        const isSelected=active===item.title;
        //const isActiveClass=activeClass===item.className;

        //console.log(`${item.title} is selected? ${isSelected}`)
       // console.log(`${item.className} is active? ${isActiveClass}`);
            return(
                        <li key={index} 
                            onClick={()=>{
                                clickMenuHandler(item.title);
                                activateClass(activeStyle);
                                item.className=activeClass;
                                }}
                                className={isSelected && item.className} 
                        >
                            <Link to={item.path} key={index}                               
                                    className='is-mobile mx-0 px-6'
                                >
                                    <span className="icon-text mx-0">
                                    <span className="icon">
                                        <div>
                                            {item.icon}
                                        </div>
                                    </span>
                                        <p className='is-hidden-touch'>{item.title}</p>
                                    </span>           
                            </Link>                    
                        </li>            
            )
        })
    return (
        <>
                    <div className='column is-narrow '>
                        <div className=''>
                            <div className="navbar-brand">
                                <a className="navbar-item" href="https://bulma.io">
                                <img alt='' src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                                </a>
                            </div>
                            <ul className='menu-list'>
                                {menuItems}
                            </ul>
                        </div>
                        
                    </div>
            
            
        </>
    )
}

export default Sidebar;
