import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
    <Fragment>
        <header className = {classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
        </header>
        <div className = {classes['main-image']}>
            <img src = {mealsImage} alt = 'A table full of delicious food!' /> 
            {/*<img src = "https://some-url.com/to-some-image.jpg" />*/}
        </div>
    </Fragment>
    );
    
};

export default Header;