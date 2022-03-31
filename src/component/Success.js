import React from 'react';
import {useNavigate} from 'react-router';
import styles from './mystyle.module.css';

function Success({name}) {
    let navigate = useNavigate();
    
    function backtoSignIn(){
        navigate('/home')
    }  
    const containerStyle = {
        backgroundColor: "lightgreen",
        marginTop: "30px",
        paddingBottom: "200px",
        paddingTop: "100px"
    } 
    
    return (
        
        <div className = "parentContainer" style = {containerStyle}>        
            <h1>Hello {name}, you are successfully logged in!</h1>        
            <br></br>
            <br></br>
            <button className = {styles.backButton} onClick={backtoSignIn}> Back to Sign In</button>
            <br></br>
            <br></br>
        </div>
        
    );
}

export default Success;