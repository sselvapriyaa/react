//import React from 'react';
import React, {useState} from 'react';
import {useNavigate} from 'react-router';

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

  const checkInfo =() =>{
    if (name === UserName && password === UserPassword && email === UserEmail){
       
        setValid(true)
        setData({
            name: name, 
            password: password, 
            email: email,
            valid: flag,
            data: data
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

    return (
        <div style = {{backgroundColor:"lightpink"}}>
            <h1>Sign in Here:</h1>
            <label>Name: </label>
            <input onChange={nameChange} value = {name}/>
            <br></br>
            <br></br>
            
            <label>Password: </label>
            <input type = "password" onChange={passwordChange} value = {password}/>
            <br></br>
            <br></br>
           
            <label>Email: </label>
            <input onChange={emailChange} value = {email}/>
            <br></br>
            <br></br>
            
            <button onClick={checkInfo} >Sign In Here </button>         
            <br></br>
            <br></br>
        </div>
    );
}

export default Home;