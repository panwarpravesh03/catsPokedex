import React, { useContext } from 'react';
import CatForm from './CatForm';
import CatsContext from '../context/CatsContext';
import store from '../useRedux/store';

const AddCat = ({ history }) => {

  const { cats, setCats } = useContext(CatsContext);

  const handleOnSubmit = (cat) => {
    setCats([cat , ...cats]);
    history.push('/');
  };

	store.dispatch({
		type: "ADD_CAT",
		//this.props.actions.addBookAction( this.state )
	});

  return (
    <React.Fragment>
      <CatForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCat;
