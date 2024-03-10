import React, { useEffect, useState } from 'react';
import styles from './drawer.module.scss';
import close from '../../images/close.png';
import axios from 'axios';
import { Link} from 'react-router-dom'


function Drawer({ handleClose, imageUrl, items = [] }) {
    const [drawerItem, setDrawerItem] = useState([]);

    useEffect(() => {
        axios.get('https://65dda8a7dccfcd562f550dad.mockapi.io/drawer')
            .then(res => {
                setDrawerItem(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); 



    const  onRemoveItem = (id) => {
    axios.delete(`https://65dda8a7dccfcd562f550dad.mockapi.io/drawer/${id}`)
    setDrawerItem(prev => prev.filter(item => item.id !== id));
    }

    
    

  

    return (
        <div className={styles.drawerThumb}>
            <div className={styles.drawerTitleThumb}>
                <h2>Drawer</h2>
                <img className={styles.drawerClose} onClick={handleClose} src={close} alt="close" />
            </div>
            {drawerItem.map(item => (
                <div className={styles.AddedItem} key={item.id}>
                    <div className={styles.priceThumb}>
                        <h2>"{item.title}"</h2>
                        <p>Price: {item.price}</p>
                    </div>
                   
                          <button className={styles.deleteButton} onClick={() => onRemoveItem(item.id)} type="button">Delete</button>
                    
                </div>
            ))}
            <div className={styles.drawerButtonThumb}>
                
                <Link to='/boughtHistory'>
                      <button className={styles.drawerButton} onClick={handleClose} type="button">Buy</button>
                </Link>
            </div>
            

        </div>
    );
}

export default Drawer;
