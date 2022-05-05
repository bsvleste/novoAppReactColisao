import styled from 'styled-components';

import { cores } from '../../globalcss/Cores';

export const Menu = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${cores.pretoMenu};
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .navLink 
{
  display: inline-block;
  color: ${cores.amareloMenu};
  text-align: center;
  text-decoration: none;
  padding: 3px;
  width: 140px;
  height: 40px;
  font-size: calc(10px + 2vmin);

  
}
.navLink:active 
{
  color: ${cores.pretoMenu};
}
.active{
  background-color: ${cores.amareloMenu};
  color: ${cores.pretoMenu};

}
.navLink:hover
{
  color:${cores.pretoMenu}; 
  background-color: ${cores.amareloMenu};
}

`;
