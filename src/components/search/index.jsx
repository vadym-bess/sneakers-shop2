import React from 'react';
import styles from './search.module.scss'
import searchIcon from '../../images/search.png'
import banner from '../../images/banner.jpeg'

function Search({searchValue, setSearchValue, handleSearchValue}) {
    
    return(

        <div className={styles.searchMainThumb}>
            <img className={styles.banner} src={banner} alt="banner" />

            <div className={styles.searchThumb}>

                <h2 className={styles.searchThumb__title}>{searchValue ? `Searching: "${searchValue}"` : "All sneakers"}</h2>


                 <div className={styles.inputContainer}>
                     <input onChange={handleSearchValue} value={searchValue} className={styles.input} type="text" placeholder='Search...' />
                     <span className={styles.iconSearch}><img src={searchIcon} alt="icon" /></span>
                </div>

            </div>
        </div>

    )
}

export default Search;