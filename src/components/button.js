import React from 'react'

export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);
    }
  
    onButtonPress(){
        this.props.onButtonPress(this.props.value);
    }
  
    render(){
        return(
            <button onClick={this.onButtonPress}>{this.props.value}</button>
        );
    }
  }