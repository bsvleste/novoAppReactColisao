import styled from 'styled-components';
import { cores } from '../../globalcss/Cores';

export const ContainerLogin = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginForm = styled.form`
    margin: 20px 0 0;
    width: 100%;
    max-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
   
    
`;
export const InputLogin = styled.input`
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 44px;
    padding: 0 15px;
    font-size: 14px;
    ::placeholder{
        color:${cores.cinza}
    }

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

export const LoginLabel = styled.label`
    margin-top: 20px;
    width: 100%;
    max-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    color:${cores.amareloFlat}
`;

export const LinkLogin  =styled.a`
    color:${cores.amareloFlat};
    margin-top: 30px;
    align-self: right;
    :hover{
        color:${cores.amareloClaro}
    }
`;

export const ButtonLogin = styled.button`

    margin: 10px 0 0;
    background: ${cores.amareloFlat};
    border-radius: 5px;
    height: 44px;
    border: 0;
    color: ${cores.pretoFlat};
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    margin-top: 30px;
    :hover{
        background-color:${cores.amareloHover};
    }
`;
export const LoginH1 = styled.h1`
    color:${cores.amareloFlat}
`;

export const LoginH3 = styled.h3`
    color:${cores.amareloFlat}
`;
