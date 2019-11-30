import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../Auth/Auth';
import Login from './Login/Login';
import CriaUsuario from './Login/CriaUsuario';
import Bid from './Bid/Bid';
import Home from './Home/Home';
import Mensalidade from './Mensalidade/Mensalidade';
import { Registro } from './Registro/Registro';

const RotasPrivadas = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
        <Component {...props} />
      ) :
        (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
)

const Rotas = (auth) => (
  <Switch>
    <Route path="/" exact component={Login}></Route>
    <Route path="/cadastro" exact component={CriaUsuario}></Route>
    <RotasPrivadas path="/Home" component={Home}></RotasPrivadas>
    <RotasPrivadas path="/Bid" component={Bid}></RotasPrivadas>
    {auth.auth &&
      <>
        <RotasPrivadas path="/Mensalidade" component={Mensalidade} />
        <RotasPrivadas path="/Registro" component={Registro} />
      </>
    }
    <Route path="*" component={Login} />
  </Switch>
)



export default Rotas;  