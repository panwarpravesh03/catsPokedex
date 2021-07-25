import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Cat = ({
  id,
  name,
  breed,
  description,
  date,
  handleRemoveCat
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '15rem' , padding: '10px'}} className="cat">
      <Card.Body>
        <Card.Title className="cat-title">{name}</Card.Title>
        <div className="cat-details">
          <div>Breed: {breed}</div>
          <div>Description: {description} </div>          
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveCat(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cat;
