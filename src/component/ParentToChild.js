import React, {useState} from "react";​
import ChildComponent from './ChildComponent';
function ParentToChild(props){
    const[data, setData] = useState('');
    const toChild = () => {
        setData("This data is being passed from parent to child");
    }
    const childToParent  =() =>{

    }
    return (
        <div>
            <ChildComponent data  = {data}/>
            <button onClick={() => toChild()}> Click Parent!</button>
        </div>
    );
    }
export default ParentToChild;
