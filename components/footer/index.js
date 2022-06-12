import React from 'react'
import {Container} from 'react-bootstrap'

export default function Footer() {
  return (
    <>
        <Container className='bg-light footer text-center my-1' fluid>
            <h6 style={{"paddingTop":"40px"}} className='text-secondary'>Made with &#128153; @Jakarta</h6>
        </Container>
    </>
  )
}
