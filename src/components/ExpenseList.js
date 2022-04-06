import React, {useContext, useEffect, useState} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
   const { expenses } = useContext(AppContext);

   const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

   useEffect(() => {
       setfilteredExpenses(expenses);
   }, [expenses]);
   
   const handleChange = (event) => {
       const searchResults = expenses.filter((filteredExpenses) =>
       filteredExpenses.name.toLowerCase().includes(event.target.value)
       );
       setfilteredExpenses(searchResults);
   };
    /*const expenses = [
        {id: 123123, name: "Shopping", cost: 50},
        {id: 123123, name: "Holiday", cost: 300},
        {id: 123123, name: "Transportation", cost: 70},
        {id: 123123, name: "Fuel", cost: 40},
        {id: 123123, name: "Child Care", cost: 500},      
    ];*/
    return( 
        <>
            <input
                type ='text'
                class = 'form-control mb-2 mr-sm-2'
                placeholder='Type to search...'
                onChange={handleChange}
                />
          
        <ul className='list-group mt-3 mb-3'>
            {filteredExpenses.map((expense)=>(
                <ExpenseItem 
                 id={expense.id}
                 name={expense.name} 
                 cost={expense.cost}
                />
            ))}
        </ul>    
    </>      
    );
};
export default ExpenseList;