import '../assets/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import labLogo from '../assets/image/logo.png';
import { Link } from "react-router-dom";

function NavbarWeb() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className='brand'>
            <Image src={labLogo}/>
            <Navbar.Brand href='/'>Lab SCR <br/>(Sistem Cerdas & Robotika)</Navbar.Brand>
        </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Profile" id="basic-nav-dropdown">
                <Link className='dropdownItem' to={"/"} >Visi Misi</Link>
                <Link className='dropdownItem' to={"/pengurus"} >Pengurus</Link>
            </NavDropdown>
            <Link to={"/kegiatan"} >Kegiatan</Link>
            <Link to={"/Berita"} >Dokumentasi</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarWeb;