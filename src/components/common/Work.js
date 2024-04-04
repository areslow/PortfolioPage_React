import './Work.css'
import React from 'react'

const Work = ({image,title,description}) => {
  return (
    <div className='work'>
      <img src={image} alt='' />
    </div>
  )
}

export default Work
