import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Card, Container, Col, Row, Placeholder } from 'react-bootstrap'
import LoadingComponent from '../loading'

export default function BlogPage() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(process.env.URL_GET_ALL_POST)
          .then((res) => res.json())
          .then((resData) => {
            const {Data} = resData
            setData(Data)
            setLoading(false)
          })
      }, [])

    if (isLoading) return (
        <>
            <LoadingComponent/>
        </>
    )
    if(data)
    return (
    <div className='animation-text'>
                    <>
                        <Container className='border-bottom content'>
                            <Col className='my-5'>
                            <Row className='text-center'>
                                <h2>Blog</h2>
                            </Row>
                            </Col>
                            <Col>
                            <Row>
                            {
                            data.map((item)=>{
                                return(
                                            <Link
                                            key={item.ArticleId}
                                            href={`/blog/${item.ArticleId}`}
                                            passHref
                                            >
                                                <a className='text-decoration-none text-black border my-3 blog-card'>
                                                    <Card className='border-0'>
                                                        <Card.Body className='p-4'>
                                                            <Card.Title as="h3">{item.Title}</Card.Title>
                                                            <Card.Text className='text-secondary'>
                                                            {item.Desc}
                                                            </Card.Text>
                                                            <Card.Text as='h6' className='border-bottom d-inline p-1'>
                                                            {item.Date}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </a>
                                            </Link>
                                        )
                                    })
                            }
                            </Row>
                            </Col>
                        </Container>
                    </>
        

    </div>
  )
}
