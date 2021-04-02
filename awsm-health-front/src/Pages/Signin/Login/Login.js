import React,{useState,useEffect} from 'react';

function Login (props) {
    const {onRouteChange}=props;
    const [targetRoute,setTargetRoute]=useState('login');
    const [signInEmail, setsignInEmail] = useState('');
    const [signInPassword, setsignInPassword] = useState('');
    
    const onEmailChange=(event)=>{
        setsignInEmail(event.target.value)         
    }

    //hardcoded users
    const users=[{
        username:'admin',
        password:'123',
        userType:'admin',
    },
    {
        username:'medic',
        password:'123',
        userType:'medic',
    },
    {
        username:'pacient',
        password:'123',
        userType:'pacient',
    }
]

    const onPasswordChange=(event)=>{
        setsignInPassword(event.target.value) 
    }
    useEffect(()=>{
        onRouteChange(targetRoute);
    },[targetRoute]) 


    const checkCredentials=()=>{
        
        const checkUser= [...users].filter((item,index)=>{
            return signInEmail===item.username & signInPassword===item.password
        })
        if(checkUser.length>0){
            console.log(checkUser[0].userType)
        }else alert("nu exista")       
    }
        return(
            <section className="hero is-fullheight">
                    
                        <div className="column is-4 is-offset-4">
                            <p className="title is-1 has-text-centered has-text-left-mobile pt-6">AWSMHealth</p>
                            <h2 className="subtitle has-text-centered is-size-5 ">Please sign-in or register</h2>
                            <form className="box ">
                                <div className="field">
                                    <label className="label has-text-left">Email</label>
                                        <div className="control">
                                            <input onChange={onEmailChange} className="input" type="email" placeholder="e.g. alex@example.com"/>
                                        </div>
                                </div>

                                <div className="field">
                                    <label className="label has-text-left">Password</label>
                                    <div className="control">
                                        <input onChange={onPasswordChange} className="input" type="password" placeholder="********"/>
                                    </div>
                                    <br></br>
                                    <label className="checkbox">
                                    <input type="checkbox"/>
                                        Remember me
                                    </label>
                                    <br></br>
                                </div>
                                            
                                <button className="button is-block is-fullwidth is-primary mgt-small"
                                    onClick={()=>checkCredentials()
                                        /*setTargetRoute('home')*/}
                                >Sign in</button>
                            </form>            
                            <p className="has-text-grey has-text-centered">
                                <a 
                                    onClick={()=>setTargetRoute('register')} 
                                >Sign Up</a> &nbsp;·&nbsp;
                                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                                <a href="../">Need Help?</a>
                            </p>             
                    </div>
                    
            </section> 
        );
}
export default Login;