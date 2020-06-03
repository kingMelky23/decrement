import React,{Component} from 'react';
import './App.css';
import Decrement from "./Components/Decrement";


class App extends Component{
  render(){
    return(
      <>
        <Decrement start ={5} />
      </>
    )
  }
}

export default App;
