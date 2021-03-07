
import 'bulma/css/bulma.css';
import './App.css';
import 'fa-icons';
import React, {Component} from 'react';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';


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
          route==='signin'?
          <Login onRouteChange={this.onRouteChange}/>:
          <Register onRouteChange={this.onRouteChange}/>
        }
        
      </div>
    );
  } 
}

export default App;
