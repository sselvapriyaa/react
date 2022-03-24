import React from 'react';
import styles from './mystyle.module.css';
function ChildForm({data}) {
        return(
            <div className = {styles.childContainer}>
                <h3> First Name: {data.fn}</h3>
                <h3> Last Name: {data.ln}</h3>
                <h3> Age: {data.ag}</h3>
                <h3> Address: {data.addr}</h3>
                <h3> Hobbies: </h3>
                <h3> {data.hobby}</h3> &nbsp;
                <br></br>
            </div>
        );
}

export default ChildForm;