import React from 'react';
import {  Route } from 'react-router-dom';
import RegistroScout from '../paginas/RegistroScout';
import Scout from '../paginas/Scout';

const RotasRegistro = ({ match }) => (
  <>
    <Route
      exact
      path={`${match.path}/scout`} component={Scout}

    />
    <Route
      exact
      path={`${match.path}/salvascout`} component={RegistroScout}

    />
  </>
)



export default RotasRegistro;  