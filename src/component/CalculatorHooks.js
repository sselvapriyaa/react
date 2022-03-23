import React, {useState, useEffect} from 'react';
  
 function CalculatorHooks(){
    const [firstNumber,setfirstNumber] = useState("");
    const [secondNumber,setsecondNumber] = useState("");
    const [result, setResult] = useState("");
    const [timer, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=> {
            setCount((count)=> count + 1);
        },1000);
        });
        const containerStyle = {
            backgroundColor: "lightpink",
            marginTop: "30px",
            paddingBottom: "300px"
        } 
        return(
            <div className = "container" style = {containerStyle}>
                <h1 style={{backgroundColor: "violet", color: "white", textAlign: "center", fontFamily: "Georgia", fontWeight: "400", textShadow: "2px 2px 5px red"}}>React Calculator with Hooks </h1>
                <p style ={{backgroundColor: "lightgreen", color: "black",textAlign: "center", fontFamily: "Georgia", fontSize: "18px"}}>Input two numbers and click the button to perform the operation</p>
             <div className = "inputnumber">
                <label style = {{backgroundColor:"#8752A1",color: "white", marginLeft: "200px", fontFamily: "Georgia", fontSize: "18px"}} htmlFor = "number1">First Number: </label>&nbsp;&nbsp;
                <input type ="number" id ="number1" onChange ={e => setfirstNumber(e.target.value)}></input>
            </div>
            <p></p>
            <div className = "inputnumber">
                <label style ={{backgroundColor:"#8752A1",color: "white", marginLeft: "200px", fontFamily: "Georgia", fontSize: "16px"}} htmlFor = "number2">Second Number: </label>&nbsp;&nbsp;
                <input type ="number" id ="number2" onChange ={e => setsecondNumber(e.target.value)}></input>
            </div>
            <p></p>
            <div className = "inputnumber">
                <p style ={{backgroundColor: "#8752A1", color: "white", marginLeft: "200px", fontSize: "18px"}}> Result: &nbsp;&nbsp; {result}</p>
            </div>
            <div className = "calculation">   
                <button style = {{backgroundColor:"violet", color: "white", marginLeft: "350px",fontSize: "20px",fontFamily: "Georgia", textAlign: "center"}} id = "add" className = "calculate" onClick={() => 
                    setResult(Number(firstNumber) + Number(secondNumber))
                }>+</button>&nbsp;&nbsp;   
                <button style = {{backgroundColor:"violet", color: "white", fontSize: "20px", fontFamily: "Georgia", textAlign: "center"}} id = "sub" className = "calculate" onClick={() => 
                 setResult(firstNumber - secondNumber)
                }>-</button>&nbsp;&nbsp;
                <button style = {{backgroundColor:"violet", color: "white", fontSize: "20px", fontFamily: "Georgia", textAlign: "center"}} id = "mul" className = "calculate" onClick={() =>
                    setResult(firstNumber * secondNumber)
                }>*</button>&nbsp;&nbsp;   
                <button style = {{backgroundColor:"violet", color: "white", fontSize: "20px", fontFamily: "Georgia", textAlign: "center"}} id = "div" className = "calculate" onClick={() =>
                     setResult(firstNumber / secondNumber)
                }>&#247;</button>
              
                <h2 style={{backgroundColor: "salmon", color: "white", fontFamily: "Georgia", fontStyle: "italic", fontSize: "20px", marginTop: "200px", marginBottom: "100px", textAlign: "center"}}> You have been on this page for : {timer} seconds</h2>
                </div>  
                </div>
                
        );    

        }
    
export default CalculatorHooks;
