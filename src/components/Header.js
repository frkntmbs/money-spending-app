import React from "react";
import { Badge, Container, Navbar, Offcanvas } from "react-bootstrap";
import { BsCart3, BsCoin } from "react-icons/bs";
import { moneyFormat } from "../helpers";
import Basket from "./Basket";

function Header({ money, total, basket, products, resetBasket }) {
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">
            <BsCoin className="text-warning h4 my-0 me-2" />
            <small>{moneyFormat(money - total)}</small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar">
            <BsCart3 />
            <Badge pill bg="warning" text="dark">
              {basket.length}
            </Badge>
          </Navbar.Toggle>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {total > 0 && (
                <Basket
                  basket={basket}
                  products={products}
                  total={total}
                  resetBasket={resetBasket}
                />
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
