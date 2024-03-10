import React from "react";
import styles from '../../components/card/card.module.scss';
import Card from '../../components/card';



function Home({items, searchValue, onAddToCard}) {
    return (
        <div className={styles.cardsMainThumb}>
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item) => (
            <Card
              item={item}
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickBuy={(obj) => onAddToCard(obj)}
              onClickFavourite={() => console.log(item)}
            />
          ))}
      </div>
    )
}

export default Home;