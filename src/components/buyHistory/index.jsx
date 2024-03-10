import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './buyHistory.module.scss'

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

function BuyHistory({ items, imageUrl }) {
    const [boughtItems, setBoughtItems] = useState([]);

    useEffect(() => {
        axios.get('https://65dda8a7dccfcd562f550dad.mockapi.io/drawer')
            .then((res) => {
                setBoughtItems(res.data);
            })
            .catch((error) => {
                console.error('Error fetching bought items:', error);
            });
    }, []);

    const getImage = (imageUrl) => {
        if (imageMap.hasOwnProperty(imageUrl)) {
            return imageMap[imageUrl];
        } else {
            return null;
        }
    }

    return (
<>
<h2 className={style.buyingHistoryTitle}>Your buying history:</h2>
<div className={style.boughtItemThumb}>

{boughtItems.map((item) => (
        <div key={item.id} className={style.cardThumb}>
            <img className={style.image} src={getImage(item.imageUrl)} alt={item.title} />
            <h3>Snikers "{item.title}"</h3>
            <h2>Price: {item.price}</h2> 
      </div> 
      ))}
</div> 
       </>
    );
}

export default BuyHistory;
