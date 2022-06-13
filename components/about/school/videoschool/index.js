import {Col, Row, Container, Tabs, Tab} from 'react-bootstrap'
import useDimension from '../../../../utils'
import Image from 'next/image'
import { useState } from 'react'

export const VideoSchool = () =>{
    const isMobile = useDimension(768)
  //   const [youtubeGo, setYoutubeGo] = useState(false)

  //   const handleMouseOver = () =>{
  //       setYoutubeGo(true)
  //   }

  //   const handleMouseLeave = () =>{
  //     setYoutubeGo(false)
  // }
    
    const handleClick = () =>{
      window.open('https://youtu.be/BzaiH2mUduU', '_blank')
    }

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

    const Thumbnail = () =>{
      return(
        <div role={"button"} className='thumbnail' onClick={handleClick}>
          <div className="thumbnail-photo">
            <Image src={"/images/about/school/youtube.jpg"} width={"590px"} height={"315px"} alt='youtube'/>
          </div>
        </div>
      )
    }

    return(
      <Container className='my-4'>
        <Row className={(isMobile?'d-flex flex-column':'')}>
          <Col className='text-center'>
            <Thumbnail/>
          </Col>
          <Col>
          <h5 className='text-center'>Short Movie - Persatuan dan Kesatuan Bangsa</h5>
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