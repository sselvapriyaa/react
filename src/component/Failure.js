 
import React from 'react';
import {useNavigate} from 'react-router';
import styles from './mystyle.module.css';

function Failure() {
    let navigate = useNavigate();
    function backtoSignIn(){
        navigate('/home')
    }
    const containerStyle = {
        backgroundColor: "red",
        marginTop: "30px",
        paddingBottom: "200px",
        paddingTop: "100px"
    } 
    
    return (
        <div className = "parentContainer" style = {containerStyle}>
            <h1> Sorry!! Invalid Credentials</h1>
            <br></br>
            <button className = {styles.backButton} onClick={backtoSignIn}> Back to Sign In</button>
            <br></br>
            <br></br>
        </div>
    );
}

export default Failure;