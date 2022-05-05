import styled from 'styled-components';
import { cores } from './Cores';

export const Cabecalho = styled.div`
    position:fixed;
    width:100%;
    top:0;
    height:70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${cores.pretoMenu};
`;

export const DeletaBid = styled.button`
     cursor: pointer;
     margin-right: 130px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: ${cores.vermelho};
    border: 1px solid #470101;
    box-shadow: 2px 1px  rgba(0, 3,0 ,0.3)
`;

export const Main = styled.div`
    margin-top: 80px;
    margin-bottom: 80px;
    margin-left:16px;
    margin-right:16px;
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