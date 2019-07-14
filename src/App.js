import React from 'react';
import {evaluate} from 'mathjs';
import './App.css'

const Screen = (props) =>{
  return(
      <div className="screen">
          <p>{props.dispValue}</p>
      </div>
  );
}

class Button extends React.Component{
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


export default class Calculator extends React.Component{
  constructor(props){
      super(props);
      this.onButtonPress = this.onButtonPress.bind(this);
      this.clrBtn = this.clrBtn.bind(this);
      this.delBack = this.delBack.bind(this);
      this.calcRes = this.calcRes.bind(this);
      this.state = {
          scrStr : ''
      };
  }

  onButtonPress(btnVal){
      this.setState((prevState)=>{
          if(prevState.scrStr!=='math error'){
              return{
                  scrStr : prevState.scrStr + btnVal
              };
          }else{
              return{
                  scrStr : '' + btnVal
              };
          }
      });
  }

  clrBtn(){
      this.setState(()=>{
          return{
              scrStr : ''
          };
      });
  }

  delBack(){
      this.setState((prevState) =>{
          if(prevState.scrStr==='math error' || prevState.scrStr==='Infinity' || prevState.scrStr==='-Infinity'){
              return{
                  scrStr : ''
              }
          }
          return{
              scrStr : prevState.scrStr.substring(0,prevState.scrStr.length-1)
          };
      });
  }

  calcRes(){
      this.setState((prevState) =>{
        let result
        try{
            result = evaluate(prevState.scrStr);
        }catch(err){
            result = ''
        }
        if(result){
            if(prevState.scrStr){
                return{
                    scrStr : String(result)
                };
            }
        }else{
            return{
                scrStr : 'math error'
            }
        }
      });
  }

  render(){
      return(
          <div className="container">
              <Screen dispValue={this.state.scrStr}/>
              <button onClick={this.clrBtn}>C</button>
              <Button value={'%'} onButtonPress={this.onButtonPress}/>
              <button onClick = {this.calcRes}>=</button>
              <button onClick = {this.delBack}><i className="fas fa-backspace"></i></button>
              {[7,8,9].map((num)=>(<Button value={num} onButtonPress={this.onButtonPress}/>))}
              <Button value={'+'} onButtonPress={this.onButtonPress}/>
              {[4,5,6].map((num)=>(<Button value={num} onButtonPress={this.onButtonPress}/>))}
              <Button value={'-'} onButtonPress={this.onButtonPress}/>
              {[1,2,3].map((num)=>(<Button value={num} onButtonPress={this.onButtonPress}/>))}
              <Button value={'*'} onButtonPress={this.onButtonPress}/>
              <Button value={0} onButtonPress={this.onButtonPress}/>
              <Button value={'.'} onButtonPress={this.onButtonPress}/>
              <Button value={'/'} onButtonPress={this.onButtonPress}/>
          </div>
      )
  }
}