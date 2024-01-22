import React from 'react'


import Header from '../ComponentsHome/Header';
import Footer from '../ComponentsHome/Footer';
import Section2 from '../ComponentsHome/Section2'
import Create from '../ComponentsInventory/Create';
import Home from '../ComponentsInventory/Home'

const InventoryPage = () => {
  return (
    <div>
      
      <Header/>
    <Create/>
    <Home/>
    <Section2/>
    <Footer/>
    </div>


  );
}
  


export default InventoryPage