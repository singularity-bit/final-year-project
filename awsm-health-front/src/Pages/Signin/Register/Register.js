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
        const {onRouteChange}=this.props;
        return(
            <section className="hero is-fullheight">
                    <div className="content ">
                        <div className="column is-4 is-offset-4">
                            <p className="title is-1 has-text-centered has-text-left-mobile pt-6">AWSMHealth</p>
                            <h2 className="subtitle has-text-centered is-size-5 ">Please  register</h2>
                            <form className="box ">
                                <div className="field is-horizontal">                                 
                                    <div className="field-body">
                                        <div className="field">
                                            <div className="field-label is-normal">
                                                <label className="label has-text-left">Nume</label>
                                            </div>
                                            <p className="control is-expanded has-icons-left">
                                                <input className="input" type="text" placeholder="nume"/>
                                                <span className="icon is-small is-left">
                                                <i className="fas fa-user"></i>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="field">
                                                <div className="field-label is-normal">
                                                    <label className="label has-text-left">Prenume</label>
                                                </div>
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

                                    <div className="field-body">
                                        <div className="field">
                                                    <div className="field-label is-normal">
                                                        <label className="label has-text-left">CNP</label>
                                                    </div>
                                                    <p className="control is-expanded has-icons-left">
                                                        <input className="input is-danger" type="text" placeholder="cnp"/>
                                                        <span className="icon is-small is-left">
                                                        <i className="fas fa-id-card"></i>
                                                        </span>
                                                    </p>
                                                    <p className="help is-danger">
                                                    This field is required
                                                    </p>
                                            </div>
                                    </div>
                                        
                                    </div>
                                    <div className="field is-horizontal">
                                    <div className="field-body">
                                        <div className="field">
                                                    <div className="field-label is-normal">
                                                            <label className="label has-text-left">Email</label>
                                                    </div>
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
                                        <div className="field">
                                        <div className="field is-expanded">
                                            <div className="field-label is-normal">
                                                <label className="label has-text-left">Numar de telefon</label>
                                            </div>
                                            <div className="field has-addons">
                                                <p className="control">
                                                <a className="button is-static">
                                                    +40
                                                </a>
                                                </p>
                                                <p className="control is-expanded">
                                                <input className="input is-danger" type="tel" placeholder="Nr de telefon"/>
                                                </p>
                                                
                                            </div>
                                            <p className="help is-danger">
                                            This field is required
                                            </p>
                                            
                                            </div>
                                        </div>
                                    </div>                                           
                                    </div>

                                    <div className="field">
                                    <div className="field-label is-normal">
                                                            <label className="label has-text-left">Parola</label>
                                                    </div>
                                    <p className="control has-icons-left">
                                        <input className="input" type="password" placeholder="Password"/>
                                        <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                        </span>
                                    </p>
                                    </div>

                                    <div className="field">
                                    <div className="field-label is-normal">
                                                            <label className="label has-text-left">Repetati parola</label>
                                                    </div>
                                    <p className="control has-icons-left">
                                        <input className="input" type="password" placeholder="Password"/>
                                        <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                        </span>
                                    </p>
                                    </div>

                                    <div className="field is-horizontal">                                                             
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-block is-fullwidth is-primary mgt-small mx-0">
                                            Register
                                            </button>
                                        </div>
                                    </div>
                            </form>            
                            <p className="has-text-grey has-text-centered">
                                <a 
                                    onClick={() => onRouteChange('register')}
                                >Sign In</a> &nbsp;·&nbsp;
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