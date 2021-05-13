import React from 'react'
import './TopNavigation.css';
export default function TopNavigation() {
    return (
        <nav className="navbar my-4 px-6">
            <div className='navbar-menu '>
                <div classNam='navbar-start block '>
                    <div className='navbar-item is-spaced'>
                    <p className="control has-icons-left">
                        <input className="input is-info" type="text" placeholder="Search"/>
                        <span className="icon is-left">
                            <i className="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                    </div>
                </div>
                
                <div className='navbar-end '>
                    <div className='navbar-item id-spaced'>
                        <div className='field is-grouped'>
                            <p className='control '>
                                <i className="far fa-bell fa-2x pr-5 is-clickable"/>
                                
                            </p>
                            <p className='control dropdown'>
                                
                                <i className="fas fa-user-circle fa-2x pr-5 is-clickable"></i>
                            </p>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </nav>
    )
}
