import React from 'react'
import './NewAppointment.css'
function NewAppointment() {
    return (
        <article className='panel is-primary my-6 '>
            <p class="panel-heading">
                Create new appointment
            </p>
            <p className='panel-block'>
                <p className='control'>
                <div className="field is-horizontal ">
                    <div className="field-label is-normal">
                        <label className="label">From</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="Name"/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                            </span>
                        </p>
                        </div>
                        <div className="field">
                        <p className="control is-expanded has-icons-left has-icons-right">
                            <input className="input is-success" type="email" placeholder="Email" value="alex@smith.com"/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                            </span>
                        </p>
                        </div>
                    </div>
                    </div>
                </p>
                
            </p>
            <p className='panel-block'>
                <p className='control'>
                <div className="field is-horizontal ">
                <div className="field-label"></div>
                <div className="field-body">
                    <div className="field is-expanded">
                    <div className="field has-addons">
                        <p className="control">
                        <a className="button is-static">
                            +44
                        </a>
                        </p>
                        <p className="control is-expanded">
                        <input className="input" type="tel" placeholder="Your phone number"/>
                        </p>
                    </div>
                    <p className="help">Do not enter the first zero</p>
                    </div>
                </div>
                </div>
                </p>
                
            </p>
            
            <p className='panel-block'>
                <p className='control'>
                <div className="field is-horizontal ">
                <div className="field-label is-normal">
                    <label className="label">Department</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                    <div className="control">
                        <div className="select is-fullwidth">
                        <select>
                            <option>Business development</option>
                            <option>Marketing</option>
                            <option>Sales</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </p>
               
            </p>

            <p className='panel-block'>
                <p className='control'>
                <div className="field is-horizontal">
                    <div className="field-label">
                        <label className="label">Already a member?</label>
                    </div>
                    <div className="field-body">
                        <div className="field is-narrow">
                        <div className="control">
                            <label className="radio">
                            <input type="radio" name="member"/>
                            Yes
                            </label>
                            <label className="radio">
                            <input type="radio" name="member"/>
                            No
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                </p>
                
            </p>

            <p className='panel-block'>
                <p className='control'>
                <div className="field is-horizontal block">
                    <div className="field-label is-normal">
                        <label className="label">Subject</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                        <div className="control">
                            <input className="input is-danger" type="text" placeholder="e.g. Partnership opportunity"/>
                        </div>
                        <p className="help is-danger">
                            This field is required
                        </p>
                        </div>
                    </div>
                    </div>
                </p>
                
            </p>    
                
            <p className='panel-block'>
            <p className='control'>
            <div className="field is-horizontal block">
                <div className="field-label is-normal">
                    <label className="label">Question</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
                    </div>
                    </div>
                </div>
                </div>
            </p>
            
            </p>              
            <p className='panel-block'>
            <p className='control'>
            <div className="field is-horizontal block">
                <div className="field-label">
                    
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <button className="button is-primary">
                        Send message
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </p>
           
            </p>
                
        </article>
    )
}

export default NewAppointment
