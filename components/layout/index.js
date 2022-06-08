import NavPage from "../navbar"
import Footer from "../footer"
import Head from 'next/head'
import {Container} from 'react-bootstrap'


export default function Layout({children, pageTitle}) {
  return (
    <>
      <Head>
        <title>
          Mohamad El Abror | {pageTitle}
        </title>
      </Head>
      <Container fluid>
          <NavPage/>
          <div>{children}</div>
          <Footer/>
      </Container>
    </>
  )
}
