import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <Logo/>
            <nav>
                <Navigationitems/>
            </nav>
        </div>
    );
};

export default sideDrawer;