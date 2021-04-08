import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">

<h2>Contact</h2>

<Form class="form">
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text"/>
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Your Email</Form.Label>
    <Form.Control type="email"  />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label >Subject</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="success">SEND</Button>{' '}

</Form>

</div>
  );
}
export default App;
