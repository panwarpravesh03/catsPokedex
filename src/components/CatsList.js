import React, { useContext } from 'react';
import _ from 'lodash';
import Cat from './Cat';
import CatsContext from '../context/CatsContext';
import reducer from '../useRedux/reducer';

const CatsList = () => {
  const { cats, setCats } = useContext(CatsContext);

 /* const handleRemoveCat = (id) => {
    setCats(cats.filter((cat) => cat.id !== id));
  };
*/
 const handleRemoveCat = (id) => {	
	setCats(reducer(cats,{
		type: 'DELETE_CAT',
		payload: {
			id: id
		}
	}));	
};

  return (
    <React.Fragment>
      <div className="cat-list">
        {!_.isEmpty(cats) ? (
          cats.map((cat) => (
            <Cat key={cat.id} {...cat} handleRemoveCat={handleRemoveCat} />
          ))
        ) : (
          <p className="message" className="noDataMsg">No cats available to show. Add a Cat to start your exciting journey of collecting cats!!!</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default CatsList;
