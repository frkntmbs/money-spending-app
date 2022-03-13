import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

function BasketItem({ item, product }) {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{product.title}</div>${product.price}
      </div>
      <Badge bg="primary" pill>
        {item.amount}
      </Badge>
    </ListGroup.Item>
  );
}

export default BasketItem;
