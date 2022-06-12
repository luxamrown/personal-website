import {Col, Row, Container, Card, Tabs, Tab} from 'react-bootstrap'
export const Framework = () => {
    const frameworks = [{
      title:'ReactJS',
      img:'/images/about/programming/logo-react-svgrepo-com.svg'
    },{
      title:'NextJS',
      img:'/images/about/programming/Nextjs-logo.svg'
    },{
      title:'Bootstrap',
      img:'/images/about/programming/bootstrap-logo-vector.svg'
    }]
    return(
      <div className='d-flex flex-wrap justify-content-center'>
        {
          frameworks.map((item, index)=>{
            return(
              <Card key={index} style={{ 'maxWidth': '14rem','padding':'30px', 'borderRadius':'4px', 'boxShadow':'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} className={'mx-2' }>
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