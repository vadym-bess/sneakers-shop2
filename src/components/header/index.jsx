
import React from "react";
import logo from '../../images/logo.png';
import basket from "../../images/shopping-cart.png";
import styles from "./header.module.scss";
import { Link} from 'react-router-dom';


function Header({onClickOpen}) {
    return (
        <div className={styles.header}>
          <nav>
             <Link to='/'>
                 <img className={styles.logo} src={logo} alt="logo" />
            </Link>
            </nav>  
            

<div className={styles.drawerThumb}>
    <nav>
           <Link to="/boughtHistory">
                      <h2 className={styles.headerBuyinghistory}>Buying history</h2>
            </Link>
    </nav>
            
            
            <div className={styles.basketThumb} onClick={onClickOpen}>
                
                <img className={styles.basket} src={basket} alt="basket" />
                <p className={styles.basketText}>Drawer</p>
            </div>
</div>
        </div>
    )
};

export default Header;