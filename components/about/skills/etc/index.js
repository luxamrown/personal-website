import Image from 'next/image'
import {Card} from 'react-bootstrap'

export const Etc = () => {
    const etc = [{
      title:'Premiere Pro',
      img:'/images/about/application/Adobe-premiere-pro-cc-1430-vector-svg.svg'
    },{
      title:'After Effect',
      img:'/images/about/application/Adobe_After_Effects_CC_icon.svg'
    }]
  
    return(
      <div className='d-flex flex-wrap justify-content-center'>
      {
        etc.map((item, index)=>{
          return(
            <Card key={index} style={{ 'maxWidth': '14rem','padding':'30px', 'borderRadius':'4px', 'boxShadow':'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} className={'mx-2' }>
                <Image src={item.img} width={'100px'} height={'100px'} alt='etc'/>
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