import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RxPerson } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";

import "../compnent/style/NavBar.css";
import Header from "./pages/Header";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="Navbar">
        <Container>
          <Navbar.Brand href="#">
            Furni <span className="span">.</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/shop" className="nav-link">
                Shop
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About us
              </NavLink>
              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact us
              </NavLink>
              <NavLink to="/profile" className="nav-link">
                <RxPerson size={28} style={{ color: "white" }} />
              </NavLink>
              <NavLink to="/cart" className="nav-link">
                <CiShoppingCart size={28} style={{ color: "white" }} />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;
