import React from "react";
import { useLocation } from "react-router-dom";
import { Nav, Navbar as Navbarbootstrap } from "react-bootstrap";

const Navbar = () => {
  const { pathname } = useLocation();
  function activNavbar(Nav) {
    return "/" + Nav === pathname;
  }
  return (
    <Navbarbootstrap
      variant="dark"
      className="d-flex justify-content-between"
      style={{ padding: "10px" }}
    >
      <Navbarbootstrap.Brand href="/" style={{ marginLeft: "50px" }}>
        The Meal
      </Navbarbootstrap.Brand>

      <Nav className="d-flex" style={{ marginRight: "50px" }}>
        <Nav.Link href="/" className={`${activNavbar("") && "bg-primary"}`}>
          All
        </Nav.Link>
        <Nav.Link
          href="/Category/Dessert"
          className={`${activNavbar("Category/Dessert") && "bg-primary"}`}
        >
          Dessert
        </Nav.Link>
        <Nav.Link
          href="/Category/Starter"
          className={`${activNavbar("Category/Starter") && "bg-primary"}`}
        >
          Starter
        </Nav.Link>
        <Nav.Link
          href="/Category/Chicken"
          className={`${activNavbar("Category/Chicken") && "bg-primary"}`}
        >
          Chicken
        </Nav.Link>
      </Nav>
    </Navbarbootstrap>
  );
};

export default Navbar;
