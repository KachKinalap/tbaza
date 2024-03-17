import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ROUTES } from "../utils/const";
import { OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import { COLOURS } from "../styled";
function MyNavbar() {

    const currentURL = window.location.pathname;

    return (
        <>
        {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar style={{backgroundColor: COLOURS.BLUE}} expand="xl" fixed="top">
            <Container>
                <Navbar.Brand style={{color: COLOURS.BEJ}} href="/">Белая гора</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <OffcanvasHeader style={{backgroundColor: COLOURS.BLUE, color: COLOURS.BEJ}} closeButton>
                        <OffcanvasTitle id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Меню
                        </OffcanvasTitle>
                    </OffcanvasHeader>
                    <OffcanvasBody style={{backgroundColor: COLOURS.BLUE}}>
                    <Nav className="me-auto sidebar">
                        {ROUTES.map((el, index)=>{
                            console.log(el.path, " ", currentURL)
                            if(currentURL == el.path)
                                return <Nav.Link style={{color: COLOURS.BEJ}} href={el.path}><span className="activeLink navHref">{el.caption}</span></Nav.Link>
                            else
                                return <Nav.Link style={{color: COLOURS.BEJ}} href={el.path}><span className="navHref">{el.caption}</span></Nav.Link>
                        })}
                    </Nav>
                </OffcanvasBody>
            </Navbar.Offcanvas>
            </Container>
        </Navbar>
        ))}
        </>
    );
}

export default MyNavbar;
