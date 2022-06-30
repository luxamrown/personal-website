import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import Head from 'next/head'
import useDimension from '../../utils';

export default function HomeContent() {
    const isMobile = useDimension(768)
  return (
    <>
    <Head>
        <title>
        Mohamad El Abror | Home
        </title>
    </Head>
        <Container className='my-5'>
            <Row>
                <Col lg className='animation-text-right text-center'>
                    <Image 
                    src={"/images/avatar.png"} 
                    width="555px" height="543px"
                    alt='avatar' quality={100} 
                    className={"border rounded-circle"} 
                    />
                </Col>
                <Col lg>
                    <div className={'home-text animation-text ' + (isMobile?'':'home-text-mobile')}>
                        <h3 className='text-center'>Hello!</h3>
                        <br></br>
                        <p>My name is El-Abror, currently i am a trainee at Enigmacamp. I learned
                            Golang for back-end and ReactJs for front-end.
                        </p>
                        <p>
                            And i have been placed as a software developer at Bussan Auto Finance
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}
