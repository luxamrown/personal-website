import { Navbar, Container, Nav } from "react-bootstrap";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useRouter } from 'next/router'
import useDimension from "../../utils";


export default function NavPage() {
    const isMobile = useDimension(768)
    const router = useRouter()
    console.log(`Mobile : ${isMobile}`);
  return (
    <>
        <Navbar bg="white" expand="xl">
            <Container fluid>
                <Navbar.Brand href="/">
                    <Image src={"/images/header-logo.svg"} width={"200px"} height={"50px"} alt={"Logo"}>
                    </Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={!isMobile?'nav-desktop':''}>
                    <Nav className="m-5 text-center">
                        <Nav.Link href="/" className={"mx-4 " +(router.pathname === '/'?'nav-text-active':'nav-text')}><h5>Home</h5></Nav.Link>
                        <Nav.Link href="/about" className={"mx-4 " +(router.pathname === '/about'?'nav-text-active':'nav-text')}><h5>About</h5></Nav.Link>
                        <Nav.Link href="/portofolio" className={"mx-4 " +(router.pathname === '/portofolio/[type]'?'nav-text-active':'nav-text')}><h5>Portfolio</h5></Nav.Link>
                        <Nav.Link href="/blog" className={"mx-4 " +(router.pathname === '/blog'?'nav-text-active':'nav-text')}><h5>Blog</h5></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>        
    </>
  )
}
