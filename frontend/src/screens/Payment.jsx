import axios from "axios";
import React, { useState } from "react";
import { Row, Form, Col, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Payment() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiredMonth, setExpiredMonth] = useState("");
  const [expiredYear, setExpiredYear] = useState("");
  const [cvv, setCvv] = useState("");
const order=JSON.parse( localStorage.getItem('cartItems'))

let navigate=useNavigate();
  const submitHandler =async () => {

    try {
        const formData = {
            firstName,
            lastName,
            address,
            address2,
            zip,
            city,
            cardNumber,
            expiredMonth,
            expiredYear,
            cvv,
            order
          };
         const res=await axios.post("http://localhost:5000/order",formData)
          console.log(res);
          navigate('/thankyou')
    } catch (error) {
        console.log(error);
    }
    
  };



  return (
    <Container className="py-3">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="formGridCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridZip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          >
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label> Card Number</Form.Label>
          <Form.Control
            placeholder="1234567891011212"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} lg={2}>
            <Form.Label> expired Month</Form.Label>
            <Form.Control
              as="select"
              placeholder="expiredMonth"
              value={expiredMonth}
              onChange={(e) => setExpiredMonth(e.target.value)}
            >
              {[...Array(12).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} lg={2}>
            <Form.Label>expired Year</Form.Label>
            <Form.Control
              as="select"
              placeholder="expiredYear"
              value={expiredYear}
              onChange={(e) => setExpiredYear(e.target.value)}
            >
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" lg={2}>
            <Form.Label>CVV</Form.Label>
            <Form.Control
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="button" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Payment;
