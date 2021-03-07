import React from 'react';


class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            signInEmail:'',
            signInPassword:''
        }
    }

    onEmailChange=(event)=>{
        this.setState(
            { signInEmail:event.target.value }
        )
    }

    onPasswordChange=(event)=>{
        this.setState(
            { signInPassword:event.target.value }
        )
    }
    render(){
        return(
            <section className="hero is-fullheight">
                    <div className="content ">
                        <div className="column is-4 is-offset-4">
                            <p className="title is-1 has-text-centered has-text-left-mobile pt-6">AWSMHealth</p>
                            <h2 className="subtitle has-text-centered is-size-5 ">Please  register</h2>
                            <form className="box ">
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Nume</label>
                                    </div><br></br>
                                    <div className="field-body">
                                        <div className="field">
                                        <p className="control is-expanded has-icons-left">
                                            <input className="input" type="text" placeholder="nume"/>
                                            <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                            </span>
                                        </p>
                                        </div>
                                        <div className="field-label is-normal">
                                            <label className="label">Prenume</label>
                                        </div>
                                        <div className="field">
                                        <p className="control is-expanded has-icons-left">
                                            <input className="input" type="text" placeholder="prenume"/>
                                            <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                            </span>
                                        </p>
                                        </div>
                                        
                                    </div>
                                    </div>

                                    <div className="field is-horizontal">
                                    <div className="field-label"></div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control is-expanded has-icons-left has-icons-right">
                                                <input className="input is-success" type="email" placeholder="Email" />
                                                <span className="icon is-small is-left">
                                                <i className="fas fa-envelope"></i>
                                                </span>
                                                <span className="icon is-small is-right">
                                                <i className="fas fa-check"></i>
                                                </span>
                                            </p>
                                        </div>
                                        
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

                                    <div className="field is-horizontal">
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

                                    <div className="field is-horizontal">
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

                                    

                                    <div className="field is-horizontal">
                                    <div className="field-label">
                                        
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                        <div className="control">
                                            <button className="button is-primary">
                                            Register
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                            </form>            
                            <p className="has-text-grey has-text-centered">
                                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                                <a href="../">Need Help?</a>
                            </p>             
                    </div>
                </div>     
            </section> 
        );
    }
}
export default Register;