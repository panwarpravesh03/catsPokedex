import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddCat from '../components/AddCat';
import CatsList from '../components/CatsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditCat from '../components/EditCat';
import CatsContext from '../context/CatsContext';

const AppRouter = () => {
  const [cats, setCats] = useLocalStorage('cats', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <CatsContext.Provider value={{ cats, setCats }}>
            <Switch>
              <Route component={CatsList} path="/" exact={true} />
              <Route component={AddCat} path="/add" />
              <Route component={EditCat} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </CatsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
