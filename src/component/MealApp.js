import React, {Fragment} from 'react';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals';

//import styles from mystyle.module.css;
function App() {
  return (  
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
      );
    }
    export default App;