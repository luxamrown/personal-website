import {Col, Row, Container, Tabs, Tab} from 'react-bootstrap'
import useDimension from '../../../../utils'

export const VideoSchool = () =>{
    const isMobile = useDimension(768)
    const SynopsisVideo = () =>{
      return(
        <>
          <h6>Synopsis</h6>
          <p>
            In a village, a village head election will be held. The villagers used to be very calm and peaceful. However, as the village head election drew near, of course the residents had a different choice. This opportunity was taken by the provocateurs to pit people against each other.
          </p>
        </>
      )
    }

    const AboutVideo = () =>{
      return(
          <>
            <h6>About</h6>
            <p>
            This short film was made by 6 students of SMAN 6 Jakarta, XI MIPA 5. Group 4 consisted of Mohamad El Abror, Mohammad Ibrahim Akhyar, Muhammad Jibril Adrian, Christian Arjuna, Ayaputra Maheswara, Aqib Rahman Radhi.
            </p>
          </>
      )
    }

    return(
      <Container className='my-4'>
        <Row>
          <Col className='text-center'>
            <iframe width={isMobile?"300":"590"} height={isMobile?"200":"315"} src="https://www.youtube.com/embed/BzaiH2mUduU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Col>
          <Col>
          <h5>Short Movie - Persatuan dan Kesatuan Bangsa</h5>
          <Tabs
              id="controlled-tab-example"
              className="my-3 justify-content-center border-0"
            >
              <Tab eventKey="synopsis" title="Synopsis">
                <SynopsisVideo/>
              </Tab>
              <Tab eventKey="about" title="About">
                <AboutVideo/>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    )
  }