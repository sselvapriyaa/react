import React from "react";
import "./calcstyle.css";
class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
            firstNumber: "",
            secondNumber: "",
            result: ""
        };
    }
    handlefirstNumber =(event) =>{
        this.setState({
            firstNumber:event.target.value
        })
    }
    handlesecondNumber =(event) =>{
        this.setState({
            secondNumber:event.target.value
        })
    }
    handleresult =(event) =>{
        this.setState({
            result:event.target.value
        })
    }
    add = (event)=>{
        event.preventDefault();
        this.setState({result: Number(this.state.firstNumber) + Number(this.state.secondNumber)})
       
    }
    sub = (event)=>{
        event.preventDefault();
        this.setState({result: Number(this.state.firstNumber) - Number(this.state.secondNumber)})
   
    }
    mul = (event)=>{
        event.preventDefault();
        this.setState({result: Number(this.state.firstNumber) * Number(this.state.secondNumber)})
        
    }
    div = (event)=>{
        event.preventDefault();
        this.setState({result: Number(this.state.firstNumber) / Number(this.state.secondNumber)})
       
    }
    render(){
        return(
            <div>
                <h1>React Calculator </h1>
               <form>
                <div id = "container">
                <label id = "number1">First Number: </label>
                <input type ="number" id = "firstNumber" value ={this.state.firstNumber} onChange ={this.handlefirstNumber}/>
               <br></br>
               <br></br>
                <label id = "number2">Second Number: </label>
                <input type ="number" id = "secondNumber" value ={this.state.secondNumber} onChange ={this.handlesecondNumber}/>
                <br></br>
                <br></br>
                <label id = "display">Result: </label>
               <input type ="number" id = "result" value = {this.state.result} onChange ={this.handleresult}/>
                <br></br>
                <br></br>
                <button type = "submit" id = "add" onClick={this.add}>Add</button>&nbsp;    
                <button type = "submit" id = "sub" onClick={this.sub}>Sub</button>&nbsp;
                <button type = "submit" id = "mul" onClick={this.mul}>Mul</button>&nbsp;    
                <button type = "submit" id = "div" onClick={this.div}>Div</button>&nbsp;
                </div>
                </form>
                
                </div>
                
        );     

        }
    }


export default Calculator;

