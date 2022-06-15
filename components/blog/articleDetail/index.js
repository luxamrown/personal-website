import {Col, Row, Container} from 'react-bootstrap'

export default function ArticleDetails(props) {
  const {article} = props
  
  return (
    <div className='animation-text'>
        <Container className='border-bottom content'>
          <Col className='my-5'>
            <Row className='text-center'>
              <h2>{article.Title}</h2>
            </Row>
          </Col>
          <Col>
            <Row>
              <p className='blog-content'>{article.Desc}</p>
            </Row>
          </Col>
        </Container>
    </div>
  )
}
