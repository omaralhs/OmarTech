import React, { useState, useEffect } from "react";
import axios from "axios";
// import data from "../data";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  const fetchData = async () => {
    const { data, error } = await axios.get("http://localhost:5000/products");
    setError(error)
    setProducts(data)
  };
  return (
    <>
    {loading?"loading...":error?"error":(
      <Row>
        {products.map((product) => (
          <Col key={product.name} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    )}
      
    </>
  );
}

export default Home;
