
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header';
import Drawer from './components/drawer';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import BuyHistory from './components/buyHistory';
import Home from '../src/components/pages/Home.jsx'
import Search from './components/search'; 
import Footer from './components/footer';

function App() {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cardItems, setCardItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation(); 

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  useEffect(() => {
    axios.get('https://65dda8a7dccfcd562f550dad.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
  }, []);

  const handleDrawerOpen = () => {
    setIsDrawerOpened(true);
    document.body.style.overflow = 'hidden';
  };

  const handleDrawerClose = () => {
    setIsDrawerOpened(false);
    document.body.style.overflow = 'auto';
  };

  const onAddToCard = (obj) => {
    axios.post('https://65dda8a7dccfcd562f550dad.mockapi.io/drawer', obj);
    if (!cardItems.some((item) => item.id === obj.id)) {
      setCardItems((prev) => [...prev, obj]);
    }
  };

  return (
    <>
      <Header onClickOpen={handleDrawerOpen} />
      
      {location.pathname === '/' && (
        <Search
          handleSearchValue={handleSearchValue}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      )}

      {isDrawerOpened && <Drawer items={cardItems} handleClose={handleDrawerClose} />}
      <Routes>
        <Route path="/" element={<Home 
          items={items} 
          searchValue={searchValue} 
          onAddToCard={onAddToCard} 
        />} />
        <Route path="/boughtHistory" element={<BuyHistory items={items} />} />
        <Route path="*" element={<Navigate to="/" />}/>
       
      </Routes>

      <Footer />
    </>
  );
}

export default App;
