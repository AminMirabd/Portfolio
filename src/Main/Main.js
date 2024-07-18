// src/Main/Main.js
import React, { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import emailjs from 'emailjs-com';
import ProjectCard from '../ProjectCard';
import './Main.css';
import sideImage from './pic.jpg';
import './background.css';
import Card from './Card';
import cal from './cal.jpg'
import login from './login.jpg';
import mine1 from './mine1.png';
import mine2 from './mine2.png';
import mono from './mono.png';
import Experience from './Experience';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaLinux, FaGithub, FaGit} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiGooglecloud, SiApachecordova, SiAndroidstudio, SiCsharp, SiFirebase, SiMicrosoftazure, SiMicrosoftsqlserver, SiMonogame, SiJquery, SiExpress  } from 'react-icons/si';


function Main() {
  const [form, setForm] = useState({ from_name: '', email: '', message: '' });
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      video.play();
    };

    const handleVideoEnd = () => {
      video.style.display = '';
    };

    setTimeout(playVideo, 2500); //delay

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);
  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('AminMir', 'template_l2es1ep', e.target, 'OayXUWRdbE6zKqbtT')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Email sent successfully');
      }, (error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again later.');
      });

    setForm({ from_name: '', email: '', message: '' }); 
  };
  return (
    <main>
      <div className="background"><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/></div>
      <Element name="landing" className="element intro">
        <video ref={videoRef} className="side-video" width="320" height="240" muted>
          <source src={require('./animation.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h2><span className="name">Amin</span> <span className="surname">Mirabdolvahabi</span></h2>
          <p>A tech and engineering lover interested in applied math, physics, and programming.</p>
        </div>
      </Element>
      <Element name="about" className="element about">
      <h2 className='hh2'>Projects</h2>
      <Card
        title="Linque"
        description="Linque is crafted for the Waterloo Catholic District School Board staff, 
        particularly International Ambassadors and Coordinators. Streamlining the management
         of events, facilitating communication, and documentation."
        leftImage={login}
        rightImage={cal}
        mainImage="https://media.licdn.com/dms/image/C561BAQFrNSIcnmB0yQ/company-background_10000/0/1584128359974/waterloo_catholic_district_school_board_cover?e=2147483647&v=beta&t=aPXT6U2C7kwt44I7kmVU4N-TglouVD19h1mpD-wsPJo"
        githubLink="https://github.com/AminMirabd/Linque"
      />
      <Card
        title="Minesweeper"
        description="Developed using MonoGame and C#.
         The game features three difficulty levels: easy, medium, and hard.
          It includes random mine placement, cell flagging, and click events for cells and music."
        leftImage={mono}
        rightImage={mine2}
        mainImage={mine1}
        githubLink="https://github.com/AminMirabd/Minesweeper-CSharp-MonoGame"
      />
      </Element>

      <Experience />

      <Element name="skills" className="element skills">
        <h2>Skills</h2>
        <div className="icons">
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJsSquare title="JavaScript" />
          <FaReact title="React" />
          <FaNodeJs title="Node.js" />
          <FaPython title="Python" />
          <FaJava title="Java" />
          <FaLinux title="Linux" />
          <FaGithub title="GitHub" />
          <SiMongodb title="MongoDB" />
          <SiMysql title="MySQL" />
          <SiAndroidstudio title="Android Studio"/>
          <SiApachecordova title="Apache Cordova" />
          <SiGooglecloud title="Google Cloud" />
          <SiCsharp title="C#" />
          <SiFirebase title="Firebase" />
          <SiMicrosoftazure title="Azure" />
          <SiMicrosoftsqlserver title="SSMS" />
          <FaGit title="Git" />
          <SiMonogame title="Monogame" />
          <SiJquery title="Jquery" />
          <SiExpress title="Express" />
        </div>
      </Element>
      
      <Element name="contact" className="element contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your name"
            value={form.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="hidden"
            name="to_name"
            value="Recipient Name" // You can replace "Recipient Name" with your actual name or any placeholder
          />
          <button class="btn" type="submit">Send</button>
        </form>
      </Element>
    </main>
  );
}

export default Main;
