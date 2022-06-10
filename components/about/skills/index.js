import {Col, Row, Container, Card, Tabs, Tab} from 'react-bootstrap'

export default function Skills(){

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
  
    const frameworks = [{
      title:'ReactJS',
      img:'/images/about/programming/logo-react-svgrepo-com.svg'
    },{
      title:'NextJS',
      img:'/images/about/programming/Nextjs-logo.svg'
    },{
      title:'Bootstrap',
      img:'/images/about/programming/bootstrap-logo-vector.svg'
    }
  ]
  
  const designs = [{
    title:'Photoshop',
    img:'/images/about/application/Adobe_Photoshop_CC_icon.svg'
  },{
    title:'Illustrator',
    img:'/images/about/application/Adobe_Illustrator_CC_icon.svg'
  },{
    title:'Indesign',
    img:'/images/about/application/Adobe_InDesign_CC_icon.svg'
  }
  ]
  
  const cad = [{
    title:'3dsMax',
    img:'/images/about/application/3ds-max-seeklogo.com.svg'
  },{
    title:'Sketch Up',
    img:'/images/about/application/sketchup-seeklogo.com.svg'
  }]
  
    const Cad = () =>{
      return(
        <div className='d-flex flex-wrap justify-content-center'>
        {
          cad.map((item, index)=>{
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
  
    const Design = () => {
      return(
        <div className='d-flex flex-wrap justify-content-center'>
        {
          designs.map((item, index)=>{
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
  
    const Database = () =>{
      return(
        <div className='d-flex flex-wrap justify-content-center'>
          <Card style={{ 'maxWidth': '14rem','padding':'30px', 'borderRadius':'4px', 'boxShadow':'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} className={'mx-2'}>
            <Card.Img variant="top" src="/images/about/programming/Postgresql_elephant.svg" width={'100px'} height={'100px'}/>
            <Card.Body>
              <Card.Title className='p-2 text-center fs-6'>PostgreSQL</Card.Title>
            </Card.Body>
          </Card> 
        </div>      
      )
    }
  
    const Framework = () => {
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
  
    const Language = () =>{
      
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
  
    
  
    return(
      <>
        <Container className='border-bottom content' style={{ "paddingBottom":"30px"}}>
          <Col>
            <Row className='text-center'>
              <h2>Skills</h2>
            </Row>
          </Col>
          <Col>
            <Row className='my-5 py-5'>
                <h4 className='border-start'>Programming</h4>
                <div>
                  <p>Currently, i am focusing on React, NextJs and Bootstrap</p>
                  <div className="d-flex flex-column">
                    <Tabs
                      id="controlled-tab-example"
                      className="mb-3 justify-content-center border-0"
                    >
                      <Tab eventKey="language" title="Language">
                        <Language />
                      </Tab>
                      <Tab eventKey="framework" title="Framework">
                        <Framework />
                      </Tab>
                      <Tab eventKey="database" title="Database">
                        <Database />
                      </Tab>
                    </Tabs>
                  </div>
                </div>
            </Row>
            <Row className='my-5'>
                <h4 className='border-start'>Application</h4>
                <div>
                  <div className="d-flex flex-column">
                    <Tabs
                      id="controlled-tab-example"
                      className="mb-3 justify-content-center border-0"
                    >
                      <Tab eventKey="cad" title="CAD">
                        <Cad />
                      </Tab>
                      <Tab eventKey="design" title="Design">
                        <Design />
                      </Tab>
                    </Tabs>
                  </div>
                </div>
            </Row>  
          </Col>
        </Container>
      </>
    )
  }