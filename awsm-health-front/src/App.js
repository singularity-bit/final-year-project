
import 'bulma/css/bulma.css';
import './App.css';
import React, {Component} from 'react';
import Login from './Pages/Signin/Login/Login';
import Register from './Pages/Signin/Register/Register';
import Home from './Pages/Home/Home';
import MainView from './MainView';



class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      route:'signin',
      isSignedIn:false
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange=(route)=>{
    if(route==='signout'){
      this.setState({isSignedIn:false})
    }else if(route==='home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route});
  }
  render(){
    const {route} =this.state;
    return (
      <div className="App">
        {
          route==='home'
          ?
          <MainView onRouteChange={this.onRouteChange}/>
          :(
            route==='register'
            ?
            <Register onRouteChange={this.onRouteChange}/>
            :
            <Login onRouteChange={this.onRouteChange}/>
          )
          
        }
        
      </div>
    );
  } 
}

export default App;
