import {Col, Row, Container} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function Renders() {
  return (
    <div className='animation-text-right'>
      <Container className='border-bottom content'>
      <Col className='my-5'>
        <Row className='text-center'>
          <h2>Portofolio</h2>
        </Row>
      </Col>
      <Col>
        <Row className='content'>
          <h4 className='mb-5 border-start'>Design & Render</h4>
          <div className="sub-content">
            <h5>School Classroom</h5>
            <p>This is school classroom based from one of class in SMA 6 Jakarta. made with 3DsMax and render by V-ray</p>
            <Row>
              <Col>
                <Image 
                src={'/images/about/renders/KELAS_3.jpg'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
              <Col>
                <Image 
                src={'/images/about/renders/KELAS_2.jpg'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image 
                src={'/images/about/renders/KELAS_1.jpg'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
            </Row>
          </div>
          <div className="sub-content">
            <h5>Stratocaster</h5>
            <p>3D Stratocaster Made with 3DsMax and render by V-ray</p>
            <Row>
              <Col>
                <Image 
                src={'/images/about/renders/GITAR_3.jpg'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
              <Col>
                <Image 
                src={'/images/about/renders/GITAR_2.jpg'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image 
                src={'/images/about/renders/GITAR_1.jpg'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
            </Row>
          </div>
          <div className="sub-content">
            <h5>Stratocaster</h5>
            <p>3D Music Turntable Made with 3DsMax and render by V-ray</p>
            <Row>
              <Col>
                <Image 
                src={'/images/about/renders/TURNTABLE_3.jpg'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
              <Col>
                <Image 
                src={'/images/about/renders/TURNTABLE_2.jpg'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image 
                src={'/images/about/renders/TURNTABLE_1.jpg'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
            </Row>
          </div>
          <div className="sub-content">
            <h5>Pocket Fragrance</h5>
            <p>Pocket Fragrance Made with 3DsMax and render by V-ray</p>
            <Row>
              <Col>
                <Image 
                src={'/images/about/renders/POCKET_3.png'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
              <Col>
                <Image 
                src={'/images/about/renders/POCKET_2.png'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image 
                src={'/images/about/renders/POCKET_1.png'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
            </Row>
          </div>
          <div className="sub-content">
            <h5>TUF A15</h5>
            <p>TUF A15 Made with 3DsMax and render by V-ray</p>
            <Row>
              <Col>
                <Image 
                src={'/images/about/renders/LAPTOP_3.jpg'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
              <Col>
                <Image 
                src={'/images/about/renders/LAPTOP_2.jpg'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image 
                src={'/images/about/renders/LAPTOP_1.jpg'}
                alt='render'
                fluid
                className='content-photo'
                />
              </Col>
            </Row>
          </div>
        </Row>
      </Col>
      </Container>
    </div>
  )
}
