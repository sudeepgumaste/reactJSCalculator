
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


class Calculator extends React.Component{
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
            return{
                scrStr : prevState.scrStr + btnVal
            };
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
            return{
                scrStr : prevState.scrStr.substring(0,prevState.scrStr.length-1)
            };
        });
    }

    calcRes(){
        this.setState((prevState) =>{
            if(prevState.scrStr){
                return{
                    scrStr : String(math.eval(prevState.scrStr))
                };
            }
        });
    }

    render(){
        let i=7;
        return(
            <div className="container">
                <Screen dispValue={this.state.scrStr}/>
                <button onClick={this.clrBtn}>C</button>
                <Button value={'%'} onButtonPress={this.onButtonPress}/>
                <button onClick = {this.calcRes}>=</button>
                <button onClick = {this.delBack}><i className="fas fa-backspace"></i></button>
                <Button value={7} onButtonPress={this.onButtonPress}/>
                <Button value={8} onButtonPress={this.onButtonPress}/>
                <Button value={9} onButtonPress={this.onButtonPress}/>
                <Button value={'+'} onButtonPress={this.onButtonPress}/>
                <Button value={4} onButtonPress={this.onButtonPress}/>
                <Button value={5} onButtonPress={this.onButtonPress}/>
                <Button value={6} onButtonPress={this.onButtonPress}/>
                <Button value={'-'} onButtonPress={this.onButtonPress}/>
                <Button value={1} onButtonPress={this.onButtonPress}/>
                <Button value={2} onButtonPress={this.onButtonPress}/>
                <Button value={3} onButtonPress={this.onButtonPress}/>
                <Button value={'*'} onButtonPress={this.onButtonPress}/>
                <Button value={0} onButtonPress={this.onButtonPress}/>
                <Button value={'.'} onButtonPress={this.onButtonPress}/>
                <Button value={'/'} onButtonPress={this.onButtonPress}/>
            </div>
        )
    }
}

ReactDOM.render(<Calculator/>, document.getElementById('calc'));