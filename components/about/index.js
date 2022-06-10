import React from 'react'
import AboutMe from './aboutme'
import Experience from './experience'
import School from './school'
import Skills from './skills'

export default function About() {
  return (
    <div className='animation-text'>
      <AboutMe/>
      <Skills />
      <Experience/>
      <School />
    </div>
  )
}