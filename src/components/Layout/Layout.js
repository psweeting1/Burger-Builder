import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraw from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
     <Aux>
        <SideDraw/>
        <Toolbar/>
        <main className={styles.content}>
           {props.children}
        </main>
     </Aux>
); 

export default layout;