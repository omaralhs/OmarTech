import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <Card className="p-3 my-3 ms-3 rounded">
      <Link to={`product/${product.id}`}>
        <Card.Img src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`product/${product.id}`}>
        <Card.Title>
          <strong>{product.name}</strong>
        </Card.Title>
        </Link>
        

        <Card.Text as="div">{product.price} $</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
