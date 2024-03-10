import React from "react"
import {useState, useEffect} from 'react'
import styles from './card.module.scss';
import unfavourite from '../../images/unfavorite.png'
import favourite from '../../images/favourite.png'

import nikeImage from '../../images/nike.webp';
import adidasImage from '../../images/adidas.webp';
import reebokImage from '../../images/reebok.webp';
import asicsImage from '../../images/asics.webp';
import pumaImage from '../../images/puma.webp';
import sauconiImage from '../../images/sauconi.webp';
import underUrmourImage from '../../images/under urmor.webp';
import puma2Image from '../../images/puma2.webp';
import reebok2Image from '../../images/reebok2.webp';
import puma3Image from '../../images/puma3.webp';
import sauconi2Image from '../../images/sauconi2.webp';
import hokaImage from '../../images/hoka.webp';


const imageMap = {
  nike: nikeImage,
  adidas: adidasImage,
  reebok: reebokImage,
  asics: asicsImage,
  puma: pumaImage,
  sauconi: sauconiImage,
  underUrmour: underUrmourImage,
  puma2: puma2Image,
  reebok2: reebok2Image,
  puma3: puma3Image,
  sauconi2: sauconi2Image,
  hoka: hokaImage
}

function Card({item, id, onClickBuy, title, price, imageUrl, onClickFavourite}) {
   const [isFavourite, setIsFavourite] = useState(false);
   const handleFavourite = () => {
      setIsFavourite(prevState => {
          const newFavouriteState = !prevState;
          localStorage.setItem(`isFavourite-${id}`, JSON.stringify(newFavouriteState));
          return newFavouriteState;
      });
  };
  
  useEffect(() => {
      const storedFavourite = localStorage.getItem(`isFavourite-${id}`);
      if (storedFavourite !== null) {
          setIsFavourite(JSON.parse(storedFavourite));
      }
  }, [id]);


   const handleClick = () => {
      onClickBuy({id,  title, price, imageUrl});

   
     };

     const getImage = () => {
      if(imageMap.hasOwnProperty(imageUrl)) {
         return imageMap[imageUrl];
      }else {
         return null;
      }
     }
   
    return( 

       <div className={styles.cardThumb}>
         <img onClick={handleFavourite} className={styles.favourite} 
         src={isFavourite ? favourite : unfavourite} alt="favourite" />
         <img className={styles.image} src={getImage()} alt={title} />
         <h3>Snikers "{title}"</h3>
         <h2>Price: {price}</h2>
         <button  className={styles.cardButton}
         type="button" 
         onClick={handleClick} 
       
         >Add to drawer</button>
         
      </div>  

     
     
)
}

export default Card;