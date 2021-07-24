import React, { useContext } from 'react';
import CatForm from './CatForm';
import { useParams } from 'react-router-dom';
import CatsContext from '../context/CatsContext';

const EditCat = ({ history }) => {
  const { cats, setCats } = useContext(CatsContext);
  const { id } = useParams();
  const catToEdit = cats.find((cat) => cat.id === id);

  const handleOnSubmit = (cat) => {
    const filteredCats = cats.filter((cat) => cat.id !== id);
    setCats([cat, ...filteredCats]);
    history.push('/');
  };

  return (
    <div>
      <CatForm cat={catToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditCat;
