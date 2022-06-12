import {Col, Row, Container, Card, Tabs, Tab} from 'react-bootstrap'

export const Language = () =>{
    const languages = [{
      title:'Golang',
      img:'/images/about/programming/go-seeklogo.com.svg'
    },{
      title:'Javascript',
      img:'/images/about/programming/Unofficial_JavaScript_logo_2.svg'
    },{
      title:'Python',
      img:'/images/about/programming/python-seeklogo.com.svg'
    }
  ]
    return(
      <div className='d-flex flex-wrap justify-content-center'>
        {
          languages.map((item, index) =>{
            return(
              <Card key={index} style={{ 'maxWidth': '14rem','padding':'30px', 'borderRadius':'4px', 'boxShadow':'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} className={'mx-2'}>
                <Card.Img variant="top" src={item.img} width={'100px'} height={'100px'}/>
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