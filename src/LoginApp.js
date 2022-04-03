import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Failure from './component/Failure';
import Success from './component/Success';

function App() {
    const name = "Priya"
console.log({name})
  return (  
   <div className="App">

   
   <Router>
       <Routes>

        <Route path = "*" element  = {<Home/>}/>
        <Route path = "/success" element  = {<Success name = {name}/>}/>
        <Route path = "/failure" element  = {<Failure/>}/>
       </Routes>
   </Router>
   </div>
     );
    }
export default App;