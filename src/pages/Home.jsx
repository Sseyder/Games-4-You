import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import ItemCount from '../components/ItemCount/ItemCount';

function Home() {
  return <div>
      <Navbar/>
      <Announcement/>
      <Slider/>
      <ItemCount/>
  </div>;
}

export default Home;
