import {Col, Row, Container, Card, Tabs, Tab} from 'react-bootstrap'
import { Cad } from './cad'
import { Database } from './database'
import { Design } from './design'
import { Etc } from './etc'
import { Framework } from './framework'
import { Language } from './language'

export default function Skills(){
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
                      <Tab eventKey="etc" title="Etc.">
                        <Etc />
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