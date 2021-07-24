import React, { useContext } from 'react';
import CatForm from './CatForm';
import CatsContext from '../context/CatsContext';

const AddCat = ({ history }) => {
  const { cats, setCats } = useContext(CatsContext);

  const handleOnSubmit = (cat) => {
    setCats([cat , ...cats]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <CatForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCat;
