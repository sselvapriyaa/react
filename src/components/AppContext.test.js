import { render, screen } from '@testing-library/react';
import AppContext from './context/AppContext'

test('on initail render',() =>{
    render(<AppContext/>);
    screen.debug();
});