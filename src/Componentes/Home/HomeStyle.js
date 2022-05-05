import styled from 'styled-components';
import { cores } from '../../globalcss/Cores';


export const ContainerButton = styled.div`
    display:flex;
    justify-content:space-around;
`;


export const ButtonResultado = styled.button`
    height:30px;
    width: 30px;
    border-radius: 50%;
    background-color: ${cores.amareloMenu};
    border: 1px solid ${cores.amareloMenu};
    position: relative;
    left:80px;
`;

export const Cards = styled.div`
    background-color: ${cores.branco};
    height: 310px;
    border-radius: 5px;
    box-shadow: 0px 10px 16px 1px rgba(0,0,0,0.9);
    margin-bottom: 20px;
    @media(min-width: 768px){
        width:45%;
        height: 315px;
    }

`;

export const CardHeader = styled.div`
    height: 48px;
    width: 100%;
    background-color: #ffce54; 
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Texto = styled.h3`
    color:#fff;
    text-align:center;
    font-size: calc(10px + 2vmin);

    `;

export const TextoData = styled.h3`
      font-size: calc(10px + 2vmin);

    `;
export const InputFile = styled.input`
    width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

`;
export const LabelFile = styled.label`
  margin-top:20px;
  height:44px;
  width:60%;
  border-radius:20px;
  display: flex;
  justify-content:center;
  align-items:center;
  background-color:${cores.amareloFlat};
  color:${cores.preto}
`;

export const TextoH4 = styled.h4`
    text-align: center;
    color:#2B2B2B;
    font-size: calc(10px + 2vmin);
`;

export const TextoH3 = styled.p`
    color:#2B2B2B;
    font-size: calc(20px + 2vmin);

`;
export const CardMain = styled.div`
        display: flex;
        justify-content: center;
`;
export const MainCard = styled.div`
    width: 290px;
    margin-bottom: 80px;
`;
export const Quadro = styled.div`
    height: 110px;
    h4{
        margin-top: 15px;
    }
`;
export const SegundoQuadro = styled.div`
    height: 100px;
    border-bottom: 1px solid ${cores.preto} 
    h4{
        margin-top: 5px;
    }
`;
export const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;
export const Img = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left:20px;
    margin-right:20px;
`;
export const EditaResultado = styled.button`
    width:20%;
    height:20px;
    background-color:${cores.amareloMenu};
    border:none;
`;