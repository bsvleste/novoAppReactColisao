import styled from 'styled-components';
import { cores } from '../../globalcss/Cores';

export const ContainerForm = styled.div`
    z-index:1;
    position: fixed;
    background-color:${cores.pretoFlat};
    top:15%;
    box-shadow: 2px 2px ${cores.pretoMenu};
    height:450px;
    width:90%;
    @media (min-width:768px){
        top:10%;
        height:500px;
        width:40%;
    }
    
`;
export const ContainerEnd = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-top:5px;
    margin-right:10px;
`;
export const ButtonEnd = styled.button`
    height:30px;
    width: 30px;
    border-radius: 50%;
    background-color: ${cores.amareloMenu};
    border: 1px solid ${cores.amareloMenu};
      
`;
export const ContainerResultado = styled.div`
    display:flex;
    flex-direction:column;
`;
export const InputDate = styled.input`
    margin-top:5px;
    width:100% ;
    padding:10px 25px;
    background-color:${cores.pretoMenu};
    color:${cores.branco};
    border:none;
    text-align:center;
`;
export const TextoQuadro = styled.h3`
    margin-top:20px;
    color:${cores.cinza};
    font-size: calc(10px + 2vmin);
    text-align:center;
`;
export const ContainerTime = styled.div`
    display: flex;
    justify-content: center;
    margin-right:15px;
`;
export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:auto;
    margin-top:20px;
    margin-right:15px;
`;

export const TextoTime = styled.p`
    margin-top:15px;
    margin-left:60px;
    margin-right:40px;
    color:${cores.cinza};
    font-size: calc(5px + 2vmin);
`;
export const SegundoInput = styled.input`
    margin-left:10px;
    border-radius:50%;
    width:40px;
    height:40px;
    background-color:${cores.pretoMenu};
    border:none;
    color:${cores.branco};
    font-size:16px;
`;
export const SegundoResultado = styled.h1`
    margin-left:10px;
    color:${cores.branco}
`;

export const SalvaResultado = styled.button`
    width:90%;
    height:46px;
    margin-bottom:30px;
    background-color:${cores.amareloMenu};
    border:none;
    
    
`;
export const ContainerButton = styled(ContainerTime)`
    margin-top:20px;
    
`;



