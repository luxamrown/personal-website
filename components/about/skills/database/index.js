import Image from 'next/image'
import {Card} from 'react-bootstrap'

export const Database = () =>{
    const db = [{
        title:'PostgreSQL',
        img:'/images/about/programming/Postgresql_elephant.svg'
      },{
        title:'MongoDB',
        img:'/images/about/programming/MongoDB_Logo.svg'
      }]

    return(
        <div className='d-flex flex-wrap justify-content-center'>
            {
                db.map((item, idx)=>{
                    return(
                    <Card key={idx} style={{ 'maxWidth': '14rem','padding':'30px', 'borderRadius':'4px', 'boxShadow':'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} className={'mx-2'}>
                        <Image src={item.img} width={'100px'} height={'100px'} alt='db'/>
                        <Card.Body>
                        <Card.Title className='p-2 text-center fs-6'>{item.title}</Card.Title>
                        </Card.Body>
                    </Card> 
                    )
                })
            }
        </div>      
    )
    }