
   
import React from 'react';
import {useNavigate} from 'react-router';

function Failure() {
    let navigate = useNavigate();
    function backtoSignIn(){
        navigate('/home')
    }
    return (
        <div style = {{backgroundColor:"red"}}>
            <h1> Sorry!! Invalid Credentials</h1>
            <br></br>
            <button onClick={backtoSignIn}> Back to Sign In</button>
            <br></br>
            <br></br>
        </div>
    );
}

export default Failure;