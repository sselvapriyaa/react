import React from "react";
import "./calcstyle.css";
class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {firstNumber: "", secondNumber: ""};
    }

 render(){
    return(
        <div>
            <h1>React Calculator</h1>
            <label>First Number</label>
            <input
            type="number"
            id="firstNumber"
            onClick={(sum)=> this.setState({first: sum.target.value})}
            value ={this.state.firstNumber}
            />
            <br>
            </br>

        </div>

    );

}
}

export default Calculator;