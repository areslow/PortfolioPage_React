import React from 'react';
import './Skills.css';
import contactImg from '../../assets/contactmeIcon.png';
import SkillItem from '../common/SkillItem';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>the details about what I can do ... (some description about my resume)</span>
      <div className='skillBars'>
        <SkillItem icon={contactImg} title='UI/UX Design' description='this is a demo text, you can write your content here' />
        <SkillItem icon={contactImg} title='Web Design' description='this is a demo text, you can write your content here' />
        <SkillItem icon={contactImg} title='App Design' description='this is a demo text, you can write your content here' />
      </div>
    </section>
  )
}

export default Skills
