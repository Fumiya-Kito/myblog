import { Container, Row, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Navbar  bg="light" variant="light" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="/" className="p-4">Fumi's Blog</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to='/profile'>
                                <Nav.Link className="p-3">Profile</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/#'>
                                <Nav.Link className="p-3">Something</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/#'>
                                <Nav.Link className="p-3">Something</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/#'>
                                <Nav.Link className="p-3">Something</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="/contact" className="p-3">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header