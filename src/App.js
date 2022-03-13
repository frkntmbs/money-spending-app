import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";
import { Container, Row } from "react-bootstrap";

function App() {
  const [money, setMoney] = useState(128000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  const resetBasket = () => {
    setBasket([]);
  };

  return (
    <>
      <Header
        total={total}
        money={money}
        basket={basket}
        products={products}
        resetBasket={resetBasket}
      />
      <Container className="mt-5">
        <Row>
          {products.map((product) => (
            <Product
              key={product.id}
              total={total}
              money={money}
              basket={basket}
              setBasket={setBasket}
              product={product}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
