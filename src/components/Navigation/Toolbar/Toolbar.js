import React from 'react';
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle';


const toolbar = (props) => (
    <header className={styles.toolbar}>
        <DrawToggle clicked={props.drawerToggleClicked}/>
            <div className={styles.menuLogo}>
                <Logo/>
            </div>
        <nav className={styles.desktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar