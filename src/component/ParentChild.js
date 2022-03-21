import React from 'react';

function Parent(){
    const data = 'Data from parent';
    return(
        <div>
            <Child dataParentToChild = {data}/>
        </div>
    )
}
function ParentToChild(props){
    const[data, setData] = useState('');
    const toChild = () => {
        setData("This data is being passed from parent to child");
    }
    const childToParent  =() =>{

function Child ({dataParentToChild}){
    return(
        <div>
            {dataParentToChild}
        </div>
    )
}

export default Parent;