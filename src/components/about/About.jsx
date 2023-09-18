import React from 'react';
import './About.css';
import Image from "../../assets/programmer.png";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className='section__title'>About Me</h2>
      <div className="about__container grid">
        <img src={Image} className='about__img' alt="programmer" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Altynai, web developer from Bishkek, Kyrgyzstan. I have some experience in frontend development. I am dedicated to building easy-to-use, user-friendly websites, and applications.</p>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number html">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number css">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JS</h3>
                <span className="skills__number js">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number react">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About