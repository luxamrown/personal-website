import { useEffect, useState } from 'react'
import {Col, Row, Container} from 'react-bootstrap'

export default function ArticleDetails(props) {
  // const {article} = props
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  
  useEffect(() => {
      setLoading(true)
      fetch(`${process.env.URL_GET_DETAIL_POST}/${props.id}`)
        .then((res) => res.json())
        .then((resData) => {
          setData(resData)
          setLoading(false)
        })
    }, [props.id])

  if (isLoading) return <p>Loading...</p>
  if(data)
  
  return (
    <div className='animation-text'>
        <Container className='border-bottom content'>
          <Col className='my-5'>
            <Row className='text-center'>
              <h2>{data.Title}</h2>
            </Row>
          </Col>
          <Col>
            <Row>
              <p className='blog-content'>{data.Desc}</p>
            </Row>
          </Col>
        </Container>
    </div>
  )
}
