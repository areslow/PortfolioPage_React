import React from 'react';
import './Intro.css';
import profileImage from '../../assets/profileImage.png';
import hiremeIcon from '../../assets/hiremeIcon.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I am 
                <span className='introName'> Davood</span>
                <br />
                Web Developer
            </span>
            <p className='introParagraph'>I am a new Asp.net web developer and an experinced geomatic engineer <br />with 5 year experience in land surveying</p>
            <Link to='contact'>
                <button className='btn'>
                    <img src={hiremeIcon} alt='hire me' className='hireBtnIcon' />
                    Hire Me
                </button>
            </Link>
        </div>
        <img src={profileImage} alt='Profile' className='bgImg'/>
    </section>
  )
}

export default Intro
