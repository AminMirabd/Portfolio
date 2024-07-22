import './Card.css';
import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Modern3DCard = ({ title, description, leftImage, rightImage, mainImage, githubLink }) => {
  return (
    <div className="container">
      <Card title={title} description={description} leftImage={leftImage} rightImage={rightImage} mainImage={mainImage} githubLink={githubLink} />
    </div>
  );
};

const Card = ({ title, description, leftImage, rightImage, mainImage, githubLink }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) - width / 2;
    const mouseY = (e.clientY - rect.top) - height / 2;

    const rX = (mouseY / height) * -20; 
    const rY = (mouseX / width) * 20;   

    x.set(rX);
    y.set(rY);

  
    ref.current.querySelectorAll('.side-image').forEach(image => {

      image.style.opacity = '1';
      image.style.transform = image.classList.contains('side-image-left')
        ? 'rotateY(-15deg) translateZ(30px) translateX(-40px)'
        : 'rotateY(15deg) translateZ(30px) translateX(40px)';
      image.style.visibility = 'visible';
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);


    ref.current.querySelectorAll('.side-image').forEach(image => {
      image.style.opacity = '0';
      image.style.transform = image.classList.contains('side-image-left')
        ? 'rotateY(-15deg) translateZ(30px) translateX(-100px)'
        : 'rotateY(15deg) translateZ(30px) translateX(100px)';
        setTimeout(() => {
          image.style.visibility = 'hidden';
        }, 200);
    });
  };

  const handleGithubClick = () => {
    console.log("GitHub icon clicked");
    window.open(githubLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="card-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div
        ref={ref}
        style={{ transform }}
        className="card"
      >
        <button onClick={handleGithubClick} className="github-button">
          <i className="fab fa-github"></i>
        </button>
        <motion.div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </motion.div>
        <motion.div className="main-image" style={{ backgroundImage: `url(${mainImage})` }}></motion.div>
        <motion.div className="side-image side-image-left" style={{ backgroundImage: `url(${leftImage})` }}></motion.div>
        <motion.div className="side-image side-image-right" style={{ backgroundImage: `url(${rightImage})` }}></motion.div>
      </motion.div>
    </div>
  );
};

export default Modern3DCard;
