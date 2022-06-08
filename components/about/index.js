import Image from 'next/image'
import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'

function AboutMe() {
  return (
    <>
    <Container className='border-bottom pb-5'>
      <Col className='my-5'>
        <Row className='text-center'>
          <h2>About</h2>
        </Row>
      </Col>
      <Col>
        <Row >
          <h4>About Me</h4>
          <p>I was born and live in Jakarta. I learn some skills like Design, 3D modeling
              and Programming. I also like football, workout, playing guitar, history,
                trains, aviation
          </p>
          <br />
          <p>I just graduated from SMA 6 Jakarta in 2021. after that, i took part in an information technology bootcamp called Enigmacamp.</p>
          <p></p>
        </Row>
      </Col>
    </Container>
    </>
  )
}

export default function About() {
  return (
    <>
      <AboutMe/>
    </>
  )
}