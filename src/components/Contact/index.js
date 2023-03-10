import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Your email has been sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h2 className="contactHeader">
        Please contact me with any questions and I will respond as soon as
        possible
      </h2>
      <Form className="emailContainer" ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email Address" />
          <Form.Text className="text-muted">
            Your email will never be shared with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control name="message" type="text" placeholder="Message" />
        </Form.Group>
        <Button type="submit" value="Send">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
