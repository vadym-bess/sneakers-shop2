import React from 'react';
import styles from './footer.module.scss';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import tiktok from '../../images/tiktok.png';
import linkedin from '../../images/linkedin.png';

function Footer() {
    return(

<div className={styles.footer}>
    <h2>Follow us:</h2>
    <div className={styles.footerSocials}>
     <a href="/"><img className={styles.socialIcon} src={facebook} alt="facebook-icon" /></a>
     <a href="/"><img className={styles.socialIcon} src={instagram} alt="instagram-icon" /></a>
     <a href="/"><img className={styles.socialIcon} src={twitter} alt="twitter-icon" /></a>
     <a href="/"><img className={styles.socialIcon} src={tiktok} alt="tiktok-icon" /></a>
     <a href="/"><img className={styles.socialIcon} src={linkedin} alt="linkedin-icon" /></a>

</div>
</div>        

    )
}

export default Footer;