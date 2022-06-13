import Image from 'next/image'
import {Card} from 'react-bootstrap'

export const Design = () => {
    const designs = [{
      title:'Photoshop',
      img:'/images/about/application/Adobe_Photoshop_CC_icon.svg'
    },{
      title:'Illustrator',
      img:'/images/about/application/Adobe_Illustrator_CC_icon.svg'
    },{
      title:'Indesign',
      img:'/images/about/application/Adobe_InDesign_CC_icon.svg'
    },{
      title:'Figma',
      img:'/images/about/application/icon figma vector.svg'
    }]
    return(
      <div className='d-flex flex-wrap justify-content-center'>
      {
        designs.map((item, index)=>{
          return(
            <Card key={index} style={{ 'maxWidth': '14rem','padding':'30px', 'borderRadius':'4px', 'boxShadow':'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} className={'mx-2' }>
                <Image src={item.img} width={'100px'} height={'100px'} alt='design'/>
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