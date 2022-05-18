import React from "react";
import styles from "./Register.module.css";
import { Form, Button, Row, Col, Radio } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {
  return (
    <>
      <div className={`${styles.register}`}>
        <Form className={`${styles.formS}`}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ReEnter Password</Form.Label>
                <Form.Control type="password" placeholder=" ReEnter Password" />
              </Form.Group>
            </Col>
          </Row>

          <div className={`${styles.radio}`}>
            <Form.Group className={`${styles.dob}`} controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
              />
            </Form.Group>
          </div>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
