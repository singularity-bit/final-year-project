import React from 'react';

class Login extends React.Component {
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
                            <h2 className="subtitle has-text-centered is-size-5 ">Please sign-in or register</h2>
                            <form className="box ">
                                <div className="field">
                                    <label className="label has-text-left">Email</label>
                                        <div className="control">
                                            <input className="input" type="email" placeholder="e.g. alex@example.com"/>
                                        </div>
                                </div>

                                <div className="field">
                                    <label className="label has-text-left">Password</label>
                                    <div className="control">
                                        <input className="input" type="password" placeholder="********"/>
                                    </div>
                                    <br></br>
                                    <label className="checkbox">
                                    <input type="checkbox"/>
                                        Remember me
                                    </label>
                                    <br></br>
                                </div>
                                            
                                <button className="button is-block is-fullwidth is-primary mgt-small">Sign in</button>
                            </form>            
                            <p className="has-text-grey has-text-centered">
                                <a 
                                    onClick={() => onRouteChange('register')} 
                                >Sign Up</a> &nbsp;·&nbsp;
                                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                                <a href="../">Need Help?</a>
                            </p>             
                    </div>
                </div>     
            </section> 
        );
    }
}
export default Login;