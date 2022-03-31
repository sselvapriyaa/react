//import React from 'react';
import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import styles from './mystyle.module.css';

function Home() {
    const[name, setName] = useState('');
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[data, setData] = useState([]);
    const[valid, setValid] = useState('false')
    const UserName = "Priya";
    const UserPassword = "Priya1234";
    const UserEmail = "selva@gmail.com";
    const flag = false;
    let navigate = useNavigate();

    const nameChange = (e) => {
    setName(e.target.value);
    }
    const passwordChange = (e) => {
     setPassword(e.target.value);
    }
    const emailChange = (e) => {
     setEmail(e.target.value);
    }

  const userInfo =() =>{
    if (name === UserName && password === UserPassword && email === UserEmail){
       
        setValid(true)
        setData({
            name: name, 
            password: password, 
            email: email,
            valid: flag,
            
        });
               
        navigate('/success');
    }
    else{
        setValid(false)
        setData({
            name: name, 
            password: password, 
            email: email,
            valid: flag
        });
        
        navigate('/failure');
        
    }

}
const containerStyle = {
    backgroundColor: "lightpink",
    marginTop: "30px",
    paddingBottom: "300px",
    paddingTop: "100px"
} 


    return (
        <div className = "parentContainer" style = {containerStyle}>
            <h1 className = {styles.heading}>Sign In Here:</h1>
            <label className = {styles.labelStyle}>Name: </label>
            <input type = "text" className = {styles.inputStyle} onChange={nameChange} value = {name}/>
            <br></br>
            <br></br>
            
            <label className = {styles.labelStyle}>Password: </label>
            <input type = "password" className = {styles.inputStyle} onChange={passwordChange} value = {password}/>
            <br></br>
            <br></br>
           
            <label className = {styles.labelStyle}>Email: </label>
            <input type = "text" className = {styles.inputStyle} onChange={emailChange} value = {email}/>
            <br></br>
            <br></br>
            
            <button className = {styles.buttonStyle} onClick={userInfo} >Sign In </button>         
            <br></br>
            <br></br>
        </div>
    );
}

export default Home;