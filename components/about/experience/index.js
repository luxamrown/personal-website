import {Col, Row, Container} from 'react-bootstrap'

export default function Experience() {
    return (
      <>
        <Container className='border-bottom content'>
          <Col className='my-5'>
            <Row className='text-center'>
              <h2>Experience</h2>
            </Row>
          </Col>
          <Col>
            <Row className='my-4'>
              <h4 className='border-start'>Bussan Auto Finance | 2022 - Now</h4>
              <h6>Software Developer</h6>
            </Row>
            <Row className='my-4'>
              <h4 className='border-start'>Runes.Asia | 2022 - 2022</h4>
              <h6>Internship</h6>
            </Row>
            <Row className='my-4'>
              <h4 className='border-start'>ARS Production | 2017 - 2019</h4>
              <h6>Founder & 3D Modeler</h6>
            </Row>
          </Col>
        </Container>
      </>
    )
  }