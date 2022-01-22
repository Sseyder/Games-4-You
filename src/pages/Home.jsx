import React from 'react';
import Navbar from '../components/Nabvar/Navbar';
import Announcement from '../components/Announcement/Announcement';
import Slider from '../components/Slider/Slider';
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
