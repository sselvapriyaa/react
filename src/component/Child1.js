import React from 'react';
import Child1 from './component/Child1';
function Child1({setMessage}) {

    const onButtonClick =(changeValue) => {
        setMessage(changeValue)
    }
}
return (
    <div>
        <button onClick={() => onButtonClick("Message from Child-1")}>Child1</button>
    </div>
);

export default Child1;