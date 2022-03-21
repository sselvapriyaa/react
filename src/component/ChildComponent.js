import React from "react";​

function ChildComponent({ToParent}){
    const data = "First child to parent";
    return (
        <div>
         {/* <h1>{data}</h1>*/}
            <ChildComponent data  = {data}/>
            <button onClick={() => toChild()}> Click Parent!</button>
        </div>
    );

    }
    export default ChildComponent;