import React from 'react'
import './Pages.css'
import wisdom from './wisdom2.jpg'

function About() {
  return (
    <>
     <div className='about-tutor'>
      <divn className='about-wrap'>
      <nav className='text-box'>
        <h1 className='head-text'>About the Tutor:</h1>
        <p className='texts'>Egotanwa Chidera Wisdom <br /> is a Computer Science Student <br /> of Chukwuemeka Odumegwu Ojukwu<br /> University.
          In the Field of Software <br /> Engineering, over 5,000 persons have<br /> passed through his Physical and online classes.
        </p>
      </nav>
      <nav className='wisdom-wrap'>
      <img className='tutor-img' src={wisdom} alt="" />
      </nav>
      </divn>
    </div>
    </>
  )
}

export default About