import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import './Experience.css'; 
import uw from './uw.png';
import uw1 from './ExperiencesAssests/uw1.png';
import uw2 from './ExperiencesAssests/uw2.png';
import uw3 from './ExperiencesAssests/uw3.png';
import wcdsb from './ExperiencesAssests/wcdsb.png';
import wcdsb1 from './ExperiencesAssests/wcdsb1.png';
import wcdsb2 from './ExperiencesAssests/wcdsb2.png';

const Experience = () => {
  const experiences = [
    {
      title: "Research Assistant",
      company: "University of Waterloo",
      duration: "Jul 2023 - Sep 2023",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB.",
      frontImage: uw,
      backImage: uw,
      oppositeImages: [
        { src: uw1, position: { top: '2vh', left: '63vw' },className: 'opposite-image' },
        { src: uw2, position: { top: '6vh', left: '42vw' }, className: 'opposite-image' },
        { src: uw3, position: { top: '10vh', left: '52.5vw' }, className: 'opposite-image' }
      ]
    },
    {
      title: "Project Manager",
      company: "Another Tech Company",
      duration: "Mar 2018 - Dec 2019",
      description: "Led a team of developers to successfully deliver multiple software projects.",
      frontImage: uw,
      backImage: wcdsb,
      oppositeImages: [
        { src: wcdsb2, position: { top: '5vh', left: '-30vw' }, className: 'opposite-image large-image' },
        { src: wcdsb1, position: { top: '15vh', left: '-40vw' }, className: 'opposite-image'}
      ]
    },

  ];

  useEffect(() => {
    const line = document.querySelector('.line');
    const items = document.querySelectorAll('.experience-item');

    let delay = 0;

    const revealItems = () => {
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('visible');
        }, delay);
        delay += 1000; 
      });
    };

    const animateLine = () => {
      line.classList.add('animate');
      setTimeout(revealItems, 2000); 
    };

    window.addEventListener('load', animateLine);
  }, []);

  return (
    <Element name="experience" className="element experience">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="line"></div>
        {experiences.map((exp, index) => (
          <div className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            {index % 2 !== 0 && <img src={exp.backImage} alt="" className="back-image" />}
            {index % 2 === 0 && <img src={exp.frontImage} alt="" className="front-image" />}
            <div className="content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <p className="description">{exp.description}</p>
            </div>
            {exp.oppositeImages.map((image, imgIndex) => (
              <img
                src={image.src}
                alt=""
                className={image.className}
                style={image.position}
                key={imgIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </Element>
  );
}

export default Experience;
