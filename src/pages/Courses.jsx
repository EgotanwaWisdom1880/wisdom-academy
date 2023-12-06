import React from 'react'
import './Pages.css'

function Courses() {
  return (
    <>
      <div className='display-course'>
    <h1 className='txt'>COURSES WE OFFER @ EMPIRE-WIDSOM ACADEMY</h1>
    <div className="courses">
      <nav className="img_background">
          <h1 className='text-head'>FullStack&nbsp;Web <br /> Development</h1>
          <p className='txt2'>Teaching how to develope a Website <br />  from Scratch using <br />  the necessary programming Languages.</p>
      </nav>
      <nav className="img_background">
          <h1 className='text-head'>FullStack&nbsp;Mobile Development</h1>
          <p className='txt2'>Teaching how to develope a Mobile Application from Scratch <br /> using the necessary programming Languages.</p>
      </nav>
      <nav className="img_background">
          <h1 className='text-head'>Data&nbsp;Analysis</h1>
          <p className='txt2'>Teaching you on how to become a Data Analytics and landing into a good paying job as a Data Analytics.</p>
      </nav>
    </div>
    </div>
    </>
  )
}

export default Courses