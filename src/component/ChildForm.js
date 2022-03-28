import React from 'react';
import styles from './mystyle.module.css';
function ChildForm({data}) {
        return(
            <div className = {styles.childContainer}>
                <h3> First Name: {data.firstName}</h3>
                <h3> Last Name: {data.lastName}</h3>
                <h3> Age: {data.age}</h3>
                <h3> Address: {data.address}</h3>       
                <h3> Hobbies: </h3>
            {/* <ul>
             {data.hobbies.map((values) => {return <b><li key={values}>{values}</li></b>}
        )}</ul> */}
              <h3>
              <ul>
                  {data.hobbies ? data.hobbies.map((hobby) => (<li>{hobby}</li>)
                  ):<p>Please select hobbies</p>} 
            </ul>
            </h3> 
                <br></br>
            </div>
        );
}

export default ChildForm;

