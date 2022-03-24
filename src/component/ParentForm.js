import React, {useState} from "react";
import ChildForm from './ChildForm';
import styles from './mystyle.module.css';

function ParentForm(){
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[age, setAge] = useState('');
    const[address, setAddress] = useState('');
    const[hobbies, setHobbies] = useState([]);
    const[data, setData] = useState([]);

    const firstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const ageChange = (e) => {
        setAge(e.target.value);
    }
    const addressChange = (e) => {
        setAddress(e.target.value);
    }
    const hobbiesChange = (e) =>{
        const values = [...e.target.selectedOptions].map((opt) =>opt.value);
        console.log(values);
        setHobbies(values);
    }
    // sending data to the child form
    const setFormData =() =>{
       setData({
           fn: firstName,
           ln: lastName,
           ag: age,
           addr: address,
           hobby: hobbies,

       });
        
    }
    const containerStyle = {
        backgroundColor: "lightpink",
        marginTop: "30px",
        paddingBottom: "300px"
    } 
        
    return(
        
            <div className = "parentContainer" style = {containerStyle}>
             <h1 className = {styles.heading}> React Form </h1>  
            <label className = {styles.labelStyle}> First Name: </label>
            <input type = "text" className = {styles.inputStyle} onChange = {firstNameChange} value = {firstName}/>
            <br></br>
            <br></br>           
            <label className = {styles.labelStyle}> Last Name: </label>
            <input type = "text" className = {styles.inputStyle} onChange = {lastNameChange} value = {lastName}/>
            <br></br>
            <br></br>
            <label className = {styles.labelStyle}> Age: </label>
            <input type = "number" className = {styles.inputStyle} onChange = {ageChange} value = {age} />
            <br></br>
            <br></br>
            <label className = {styles.addressStyle}> Address: </label>
            <textarea className = {styles.textareaStyle} onChange = {addressChange} value = {address} /><br></br>
            <br></br>

            <label className = {styles.selectLabel} htmlFor = "hobbies"> Hobbies: </label>
            <br></br>
            <br></br>
            <select className = {styles.selectStyle} multiple onChange = {hobbiesChange} >
                <option value = "Walking, ">Walking</option>
                <option value = "Reading, ">Reading</option>
                <option value = "Music, ">Music</option>
                <option value = "Dancing, ">Dancing</option>
                <option value = "Painting, ">Painting</option>
                <option value = "Hiking, ">Hiking</option>
            </select>
            <br></br>
            <br></br>
           
            <ChildForm data = {data}/>
            <br></br>
            <button className = {styles.buttonStyle} onClick={()=> setFormData()}>Submit</button> 
            <br></br>
            <br></br>      
        </div>
   
         
    );
}

export default ParentForm;