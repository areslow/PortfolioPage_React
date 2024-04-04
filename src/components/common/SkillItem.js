import React from 'react'
import './SkillItem.css'

const SkillItem = ({icon,title,description}) => {
  return (
    <div className='skillBar'>
      <img src={icon} alt={title} className='skillBarImg' />
      <div className='skillBarText'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default SkillItem
