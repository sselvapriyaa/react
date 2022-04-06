//import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
//import App from './App';
/*
describe("Testing App component",() =>{
  render(<App />);
  const userName  = await screen.findByText
  test("user's name is rendered") 

test('Loading text appearing..", async () => {
  render(<App />);
  const loadingText = screen.getByText('Loading...');
  expect(loadingText).toBeInTheDocument();
  await waitForElementToBeRemoved(()=> screen.getByText('Loading..,'));

});
});*/
/*import { currencyFormat } from 'utils';

describe('currencyFormat', () => {
  it('correctly formats given number', () => {
    expect(currencyFormat(1000)).toBe(`$1,000.00`);
  });
});*/
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders my budget planner heading', () =>{
  render(<App />);
  const headingElement = screen.getByText('My Budget Planner');
  expect(headingElement).toBeInTheDocument();
});




