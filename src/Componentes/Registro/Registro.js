import React from 'react';
import './Registro.css';
import RotasRegistro from './RotasRegistro/RotasRegistro';
import { NavLink } from 'react-router-dom';
import { Cabecalho, Main } from '../../globalcss/ComponeteGlobal';
export const Registro = ({ match }) => (
  <>
    <Cabecalho>
      <h2>Regsitro</h2>
    </Cabecalho>
    <nav className="fixed-top scrollMenu">
      <NavLink
        className="navLink"
        to={`${match.url}/salvascout`}

      >
        <div className="icone">
          <i className="fa fa-home " arial-hidden="true"></i>
          <p>RegistroScout</p>
        </div>
      </NavLink>
      <NavLink
        className="navLink"
        to={`${match.url}/scout`}>
        <div className="icone">
          <i className="fas fa-futbol " arial-hidden="true"></i>
          <p>Scout</p>
        </div>

      </NavLink>


    </nav>
    <RotasRegistro match={match} />
    <Main>
      Principal
    </Main>
  </>
)
