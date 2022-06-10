import {Col, Row, Container} from 'react-bootstrap'

export default function AboutMe() {
    return (
      <>
        <Container className='border-bottom content'>
          <Col className='my-5'>
            <Row className='text-center'>
              <h2>About</h2>
            </Row>
          </Col>
          <Col>
            <Row>
              <h4 className='border-start'>About Me</h4>
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