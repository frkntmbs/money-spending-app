import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import BasketItem from "./BasketItem";

function Basket({ basket, products, total, resetBasket }) {
  return (
    <div>
      <ListGroup as="ol" numbered>
        {basket.map((item) => (
          <BasketItem
            item={item}
            product={products.find((p) => p.id == item.id)}
          />
        ))}
      </ListGroup>
      <hr />
      <strong>Total: ${total}</strong>
      <hr />
      <Button variant="outline-danger" onClick={resetBasket}>
        Clear
      </Button>
    </div>
  );
}

export default Basket;
