import { Button, ButtonGroup, Card, Carousel, Col, Row } from "react-bootstrap";

function Product({ product, basket, setBasket, total, money }) {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrentProduct = basket.filter(
      (item) => item.id !== product.id
    );

    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrentProduct]);
    } else {
      setBasket([...basketWithoutCurrentProduct, currentBasket]);
    }
  };

  return (
    <Col md="3">
      <Card className="mb-4">
        <Carousel interval="5000" className="p-2 card-carousel">
          {product.images.map((img) => (
            <Carousel.Item>
              <img className="d-block w-100" src={img} alt={product.title} />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <hr />
          <Row>
            <Col>
              <strong className="d-block h5">${product.price}</strong>
            </Col>
            <Col>
              <ButtonGroup>
                <Button variant="outline-secondary" onClick={removeBasket}>
                  -
                </Button>
                <Button variant="outline-secondary" disabled>
                  {(basketItem && basketItem.amount) || 0}
                </Button>
                <Button variant="outline-secondary" onClick={addBasket}>
                  +
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
