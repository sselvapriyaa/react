import React from 'react';
import ReactDOM from 'react-dom';
//import CalculatorFunction from './component/CalculatorFunction';
//import CalculatorHooks from './component/CalculatorHooks';
//import MyFunctionCalculator from './component/MyFunctionCalculator';
import './index.css';
//import Calculator from './component/Calculator';
//import CalcultorHook from './component/CalculatorHook';
//import Demo from './component/Demo';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import ParentForm from './component/ParentForm';
//import MyApp from './App';
//import EffectHook from './component/EffectHook';
//import EffectNew from './component/EffectNew';

ReactDOM.render(
  <React.StrictMode>
    <App/>
   
   {
   
  /* </App>  
  <ParentForm/>
  <CalculatorHooks/>
     <CalculatorFunction/>
   <Calculator />
     <MyApp/>
  <Demo/>
  <EffectNew/>
   /*<EffectHook/> */}

  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

