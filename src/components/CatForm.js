import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const CatForm = (props) => {
  const [cat, setCat] = useState(() => {
    return {
      name: props.cat ? props.cat.name : '',
      breed: props.cat ? props.cat.breed : '',
      description: props.cat ? props.cat.description : '',      
      date: props.cat ? props.cat.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { name, breed, description } = cat;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, breed, description];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const cat = {
        id: uuidv4(),
        name,
        breed,
        description,
        date: new Date()
      };
      props.handleOnSubmit(cat);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {      
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setCat((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setCat((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Cat Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={name}
            placeholder="Enter name of Cat"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="breed">
          <Form.Label>Cat Breed</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="breed"
            value={breed}
            placeholder="Enter the breed of cat"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="description"
            value={description}
            placeholder="Enter characterics of cat"
            onChange={handleInputChange}
          />
        </Form.Group>        
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CatForm;
