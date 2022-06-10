import {Col, Row, Container} from 'react-bootstrap'

export default function School() {
    return (
      <>
        <Container className='border-bottom content'>
          <Col className='my-5'>
            <Row className='text-center'>
              <h2>School</h2>
            </Row>
          </Col>
          <Col>
            <Row>
              <h4 className='border-start'>SMA 6 Jakarta | 2018 - 2021</h4>
              <p>Natural Science</p>

            </Row>
          </Col>
        </Container>
      </>
    )
  }