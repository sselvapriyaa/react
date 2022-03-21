import React from 'react';
import ReactDOM from 'react-dom';

//import './index.css';
import Calculator from './component/Calculator';
//import CalcultorHook from './component/CalculatorHook';
//import Demo from './component/Demo';
import reportWebVitals from './reportWebVitals';
//import MyApp from './App';
//import EffectHook from './component/EffectHook';
//import EffectNew from './component/EffectNew';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
   {
  /* 
  
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

