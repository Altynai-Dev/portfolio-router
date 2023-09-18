import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>
            <div className="work__card">
              <div className="work__thumbnail">
                <img src="https://noraydesigns.com/cdn/shop/articles/diamond_quality_e937434a-7bdf-41fd-bd81-5935707348e8.jpg?v=1614681170" alt="diamond" className='work__img' />
                <div className="work__mask"></div>
              </div>
              <h3 className="work__title">Diamond Home</h3>
              <a href=" https://altynai-dev.github.io/Diamond-Home/" target='_blank' className="work__button">
                <i className='icon-link work__button-icon'></i>
              </a>
            </div>

            <div className="work__card">
              <div className="work__thumbnail">
                <img src="https://makers.to/website/wp-content/uploads/2023/02/Makers-website-thumbnail-1024x535.png" alt="makers" className='work__img' />
                <div className="work__mask"></div>
              </div>
              <h3 className="work__title">Makers</h3>
              <a href="https://altynai-dev.github.io/makers-CRUD/" target='_blank' className="work__button">
                <i className='icon-link work__button-icon'></i>
              </a>
            </div>
    </section>
  )
}

export default Portfolio