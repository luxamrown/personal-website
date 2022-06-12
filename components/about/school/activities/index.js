import {Col, Row, Container, Carousel} from 'react-bootstrap'
import Image from 'next/image'
import useDimension from '../../../../utils'

export const Activities = () =>{
    const isMobile = useDimension(768)

    const streetWorkout = [{
        img:'/images/about/school/DSC01180.jpg'
    },{
        img:'/images/about/school/DSC01178.jpg'
    },{
        img:'/images/about/school/131954.jpg'
    },{
        img:'/images/about/school/1567852381766.jpg'
    },{
        img:'/images/about/school/1582958345143.jpg'
    }]
    
    const band = [{
        img:'/images/about/school/DSC01203.jpg'
    },{
        img:'/images/about/school/Demo Ekskul_190721_0022.jpg'
    }]
    return(
        <>
                <h5>Activities</h5>
            <Container className=''>
                <Row className={'text-center ' + (isMobile?'d-flex flex-column':'')}>
                    <Col className='my-5'>
                    <h5 className='border-bottom d-inline p-1'>
                            Street Workout
                    </h5>
                    <p className='my-5'>
                            Exercise to be healthy
                    </p>
                    <blockquote cite="http://www.workoutembassy.com/">
                            &quot;Sacrifice Workhard Endurance Accomplish Triumph&quot;
                            <p>- Workout Embassy</p>
                        </blockquote>
                    </Col>
                    <Col>
                        <Carousel>
                            {
                                streetWorkout.map((item, idx)=>{
                                    return(
                                        <Carousel.Item key={idx}>
                                            <Image src={item.img} width={'1024px'} height={'682.5px'} alt='activities'/>
                                        </Carousel.Item>
                                    )
                                })
                            }

                        </Carousel>
                    </Col>
                </Row>
                <Row className={'text-center ' + (isMobile?'d-flex flex-column-reverse':'')}>
                    <Col>
                        <Carousel>
                            {
                                band.map((item,idx)=>{
                                    return(
                                        <Carousel.Item key={idx}>
                                            <Image src={item.img} width={'1024px'} height={'682.5px'} alt='activities'/>
                                        </Carousel.Item>
                                    )
                                })
                            }

                        </Carousel>
                    </Col>
                    <Col className='my-5'>
                    <h5 className='border-bottom d-inline p-1'>
                            Band
                    </h5>
                    <p className='my-5'>
                            Learn how to playing guitar xD
                    </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}