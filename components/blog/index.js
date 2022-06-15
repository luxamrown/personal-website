import Link from 'next/link'
import { useRouter } from 'next/router'
import { Card, Container, Col, Row } from 'react-bootstrap'
export default function BlogPage(props) {
    const router = useRouter()
    const article = props.data
    // <h1 key={item.ArticleId} onClick={() => router.push(`/blog/${item.ArticleId}`)}>{item.Title}</h1>
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
                            article.map((item)=>{
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
