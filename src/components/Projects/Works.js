import React from 'react'
import './Works.css'
import Work from '../common/Work'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.gif'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jfif'
import img6 from '../../assets/img6.jfif'

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>something about your works or how you do them or anything you like</span>
      <div className='worksDone'>
        <Work image={img1} title='prj1' description='demo text here with any explanation' />
        <Work image={img2} title='prj2' description='demo text here with any explanation' />
        <Work image={img3} title='prj3' description='demo text here with any explanation' />
        <Work image={img4} title='' description='' />
        <Work image={img5} title='prj5' description='' />
        <Work image={img6} title='' description='demo text here with any explanation' />
      </div>
      <button className='worksBtn'>
        See More
      </button>
    </section>
  )
}

export default Works
