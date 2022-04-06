//import './App.css';'
//import './App.js';
//import './style1.css';
//import './loginstyle.css';
//import {useState} from 'react';
//import Calculator from './component/Calculator';
//import FirstComponent from './component/FirstComponent';
//import ParentToChild from ''./component/ParentToChild';
//import Child1 from './component/Child1';
//import Demo from './component/Demo';
//import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import LoginForm from './component/LoginForm';
//import Home from './component/Home';
//import Profile from './component/Profile';
//import About from './component/About';
//import Error from './component/Error';
//import Redirect from './component/Redirect';
//import LoginSuccessPage from './component/LoginSuccessPage';
//import InvalidLoginPage from './component/InvalidLoginPage';
//import Failure from './component/Failure';
//import Success from './component/Success';
//import ParentComponent from './component/ParentComponent';
//import UserDetailsForm from './component/UserDetailsForm';
//import ChildForm from './component/ChildForm';
//import StylingComponent from './component/StylingComponent.js';
//import StyledDemo from './component/StyledDemo';
//import ParentForm from './component/ParentForm';
//import CommonStyles from './component/CommonStyles';
//import ParentForm from './component/ParentForm';
//import App from './App';
//import Form from './component/Form';
//import DisplayForm from './component/DisplayForm';
//import LoginForm from './component/LoginForm';
//import React, {Fragment} from 'react';
//import Header from './component/Layout/Header';
//import Meals from './component/Meals/Meals';
//import styles from mystyle.module.css;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import RemainingBudget from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import {AppProvider} from './context/AppContext';

const App = () => {
  return ( 
     <AppProvider>
       <div className='container'>
      <h1 className='mt-3'> My Budget Planner </h1> 
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>
        <div className='col-sm'>
          <RemainingBudget />
        </div>
        <div className='col-sm'>
          <ExpenseTotal />
        </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row'>
        <div className='col-sm'>
        <ExpenseList />
        </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpenseForm />
        </div>
        </div>
        </div>
     </AppProvider>
    
      );
    };
    export default App;
  /*const [selectedMessage, setMessage] = useState('empty');*/
  /*const [setInfo, displayInfo] = useState('')
  const [user, changeUser] = useState('userA');
  const numbers  = [1,2,3,4,5];
  const name  = "Priya"*/
  //const [setInfo] = useState('');
  /*const users = [ {name:'John', password:'john', email:'john@gmail.com'},
  {name:'Mike', password:'mike', email:'mike@yahoo.com'}];*/

/*const name = "Priya"
console.log({name})
  return (  
   <div className="App">*/
      
       
      /*  
      <ParentForm/>
      <LoginForm users={users}/>

  
      <ParentForm/>
       <ParentComponent/>   
    <UserDetailsForm/>
    
    <ParentForm/>
        <CommonStyles/>
      <h1>Hello World from React!</h1>
     <Form/>
      <DisplayForm/>
 
     <StylingComponent/>
    <StyledDemo/>
  <h1>Hello World from React!</h1> */
   /* <Router> */
    /*  <nav>

      </nav> */
      /*</Router> <nav>
        <ul>
           <li><Link to = "./home">Home Page</Link></li>
           <li><Link to = "./about">About Us</Link></li>
           <li><Link to = "./profile">Profile</Link></li>
        </ul> 
       </nav>*/
      /*<Routes>*/
           /*<Route path = "./home" element  = {<Home/>}/>
           <Route path = "./about" element  = {<About Us/>}/>
           <Route path = "./profile" element  = {<Profile/>}/>
           <Route path = "./success" element  = {<Success/>}/>
           <Route path = "./failure" element  = {<Failure/>}/>
         <Route path = "*" element  = {<Home/>}/>
         <Route path = "*" element  = {<Home/>}/>
         <Route path = "/home" element  = {<Home/>}/>*/

       /* <Route path = "*" element  = {<Home/>}/>
        <Route path = "/success" element  = {<Success name = {name}/>}/>
        <Route path = "/failure" element  = {<Failure/>}/>*/

         /*<Route path = "./LoginSuccessPage" element  = {<LoginSuccessPage/>}/>
         <Route path = "./InvalidLoginPage" element  = {<InvalidLoginPage/>}/>*/
       /*</Routes>*/
       /*<Redirect/>*/
      /*</Router> */
    
     /*</div>*/

     /* <div className='demo'>
      <h1>Hello World from React!</h1>
     
    <Calculator/>
    <Demo/>
     
      <ParentToChildComponent/> 
      <FirstComponent/>
    
     
      <Child2 selectedMessage={selectedMessage}/>
  <Child1 setMessage={setMessage}/>
</div> */
//export default FirstComponent;
//export default ParentTochild;
//export default Child1;
//export default ParentTochild;
