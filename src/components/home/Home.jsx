import React from 'react';
import Me from '../../assets/IMG_20230318_172928.jpg'
import './Home.css';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} className='home__img' alt='person' />
        <h1 className='home__name'>Altynai Imanalieva</h1>
        <div className='home__education'>I am a Frontend Developer</div>
        <a href="#contact" className='btn'>Hire Me</a>
      </div>
    </section>
  )
}

export default Home