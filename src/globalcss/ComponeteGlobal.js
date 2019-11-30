import styled from 'styled-components';
import { cores } from './Cores';

export const Cabecalho = styled.div`
    position:fixed;
    width:100%;
    top:0;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${cores.pretoMenu};
`;

export const Main = styled.div`
    margin-top: 60px;
    margin-bottom: 60px;
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