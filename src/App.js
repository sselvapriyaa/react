//import './App.css';'
//import './App.js';
//import './style1.css';
//import {useState} from 'react';
//import Calculator from './component/Calculator';
//import FirstComponent from './component/FirstComponent';
//import ParentToChild from ''./component/ParentToChild';
//import Child1 from './component/Child1';
//import Demo from './component/Demo';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './component/Home';
import Profile from './component/Profile';
import About from './component/About';
import Error from './component/Error';

function App() {
  /*const[selectedMessage, setMessage] = useState('empty');*/
  return (  
   <div className="App">
    {/* <h1>Hello World from React!</h1>
     <Router>
       <nav>
         <ul>
           <li><Link to = "./home">Home Page</Link></li>
           <li><Link to = "./about">About Us</Link></li>
           <li><Link to = "./profile">Profile</Link></li>
         </ul>
       </nav>
       <Routes>
          <Route path = "./home" element  = {<Home/>}/>
           <Route path = "./about" element  = {<About Us/>}/>
           <Route path = "./profile" element  = {<Profile/>}/>
           <Route path = "*" element  = {<Error/>}/>
       </Routes>
       <Redirect/>
     </Router>
    
     </div>

      <div className='demo'>
      <h1>Hello World from React!</h1>
     
    <Calculator/>
    <Demo/>
      <StyledDemo/>
      <ParentToChildComponent/> 
      <FirstComponent/>
  
     
      <Child2 selectedMessage={selectedMessage}/>
  <Child1 setMessage={setMessage}/>*/}
     </div>
     
  );
}

//export default FirstComponent;
//export default ParentTochild;
//export default Child1;
//export default ParentTochild;
export default App;