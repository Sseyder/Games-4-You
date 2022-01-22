import React from 'react';
import Announcement from '../components/Announcement/Announcement';
import ItemCount from '../components/ItemCount/ItemCount';
import Navbar from '../components/Nabvar/Navbar';
import Slider from '../components/Slider/Slider';

function Home() {
  return <div>
      <Navbar/>
      <Announcement/>
      <Slider/>
  </div>;
}

export default Home;
