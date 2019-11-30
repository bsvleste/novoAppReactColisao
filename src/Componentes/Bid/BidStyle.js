import styled from 'styled-components';
import React from 'react';
import { cores } from '../../globalcss/Cores';


export const Texto = styled.h3`
    color:#fff;
    text-align:center;
    `;
export const CardBid = styled.div`
    z-index:1;
    position: fixed;
    background-color:${cores.pretoFlat};
    top:15%;
    box-shadow: 2px 2px ${cores.pretoMenu};
    height:300px;
    width:90%;
    @media (min-width:768px){
        top:10%;
        width:40%;
    }
`;
export const FechaForm = styled.span`
    display:flex;
    justify-content:flex-end;
`;
export const ButtonEnd = styled.button`
    margin-top:5px;
    margin-right:10px;
    height:30px;
    width: 30px;
    border-radius: 50%;
    background-color: ${cores.preto};
    border: 1px solid ${cores.preto};
    color:${cores.branco}
      
`;

export const MainFormBid = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;    
`;
export const HeaderBid = styled.div`
    width:100%;
    height:40px;
    background-color:#ffce54;
`;

export const Check = styled.div`
    margin-top:40px;
    width:60%;
`;
export const IconCheck = styled.span`
    color:${props => props.check ? '#11FF00' : cores.vermelho};
`;
export const Dont = styled.div`
    color:red;
    margin-top:30px;
    width:60%;
`;
export const Botao = styled.button`
    margin-top:20px;
    width:90%;
    background: ${cores.amareloFlat};
    border-radius: 5px;
    height: 44px;
    border: 0;
    color: black;
    font-weight: bold;
    cursor: pointer;
`;

export const ButtonRg = styled.button`
    cursor: pointer;
    z-index: 10;
    position: fixed;
    left: 42%;
    bottom: 8%;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #ffce54;
    border: 1px solid #ffce54;
    box-shadow: 2px 1px  rgba(203, 248, 3, 0.3)
`;
export const Main = styled.div`
    margin-top:30px;
    margin-bottom: 60px;
    margin-left:35px;
    margin-right:35px;
    height: auto;
    display: block;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
export const ListaBid = styled.div`
    margin-top:25px;
    display: flex;
    height:60px;
    font-size: 16px;
    box-shadow: 5px 10px 8px #0025;
    color:whitesmoke;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius:5px;
    @media (min-width:768px){
        width:50%;
    
    }
    `;