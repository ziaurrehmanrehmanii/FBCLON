import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="primary">
        <Container>
          <Navbar.Brand>
            <Link className={`${styles.link}`} to="/">
              Facebook
            </Link>
          </Navbar.Brand>
          <Nav className={` ${styles.nav}`}>
            <Nav.Link>
              <Link className={`${styles.link}`} to="/login">
                Login
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link className={`${styles.link}`} to="/register">
                Register
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
