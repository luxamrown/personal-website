import Image from 'next/image'
import {Card} from 'react-bootstrap'

export const Database = () =>{
    return(
        <div className='d-flex flex-wrap justify-content-center'>
        <Card style={{ 'maxWidth': '14rem','padding':'30px', 'borderRadius':'4px', 'boxShadow':'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} className={'mx-2'}>
            <Card.Img variant="top" src="/images/about/programming/Postgresql_elephant.svg" width={'100px'} height={'100px'}/>
            <Image src={"/images/about/programming/Postgresql_elephant.svg"} width={'100px'} height={'100px'} alt='db'/>
            <Card.Body>
            <Card.Title className='p-2 text-center fs-6'>PostgreSQL</Card.Title>
            </Card.Body>
        </Card> 
        </div>      
    )
    }