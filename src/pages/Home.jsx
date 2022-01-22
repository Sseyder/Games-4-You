import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

function Home() {
  return <div>
      <Navbar />
      <Announcement />
      <Slider />
  </div>;
}

export default Home;
