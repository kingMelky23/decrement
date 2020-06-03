import React, { Component } from 'react'
import PropTypes from "prop-types"

class Decrement extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: props.start
        }
    }
    decrease(){
        if(this.state.count=== 0){
            return alert("Cannot be less than zero!")
        }
        this.setState({
            count: this.state.count - 1
        },() => {console.log("Callback value:", this.state.count)})
     
    }
    
    render() {
        return (
            <div>
            
                <button onClick ={()=> this.decrease()}>Decrement {this.state.count} </button>
                
            </div>
        )
    }
}

Decrement.propTypes={
    count: PropTypes.number.isRequired,
}

export default Decrement
