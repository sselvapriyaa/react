import React, {useState , useEffect} from "react";​
function useCustomHook(init, componentName){

const [counter , setCount] = useState(init);

function resetCount(){

setCount(count + 1);

}

useEffect(() => {

console.log("The button of the "​

+ componentName + " is clicked"​

+ counter + " times.");

} , [count , componentName]);

return resetCount(
    resetCount
);
}
export default useCustomHook;