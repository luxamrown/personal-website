import NavPage from "../navbar"
import Footer from "../footer"
import {Container} from 'react-bootstrap'


export default function Layout({children}) {
  return (
    <Container fluid>
        <NavPage/>
        <div>{children}</div>
        <Footer/>
    </Container>
  )
}
