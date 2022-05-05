import React, { useState, useEffect, useContext, useReducer } from 'react';
import Api from '../../Services/Api';
import { ContainerButton, TextoTime, ContainerTime, ContainerEnd, ButtonEnd, ContainerForm, Form, SegundoInput, SegundoResultado, TextoQuadro, InputDate, SalvaResultado, ContainerResultado } from './FormularioStyle';
import ContextHome from './store/contextHome';

function appReducer(state, actions) {
    switch (actions.type) {
        case 'segundoMais': {
            return {
                ...state,
                segColisao: state.segColisao + 1,
            }
        }
        case 'segundoMenos': {
            return {
                ...state,
                segColisao: state.segColisao - 1,
            }
        }
        case 'segundoMaisAdv': {
            return {
                ...state,
                segAdv: state.segAdv += 1,
            }
        }
        case 'segundoMenosAdv': {
            return {
                ...state,
                segAdv: state.segAdv - 1,
            }
        }
        case 'primeiroMais': {
            return {
                ...state,
                priColisao: state.priColisao + 1,
            }
        }
        case 'primeiroMenos': {
            return {
                ...state,
                priColisao: state.priColisao - 1,
            }
        }
        case 'primeiroMaisAdv': {
            return {
                ...state,
                priAdv: state.priAdv + 1,
            }
        }
        case 'primeiroMenosAdv': {
            return {
                ...state,
                priAdv: state.priAdv - 1,
            }
        }
        case 'salvar':
            return {
                segColisao: 0,
                segAdv: 0,
                priColisao: 0,
                priAdv: 0
            }
        default:
            return state;
    }
}
const jogo = {
    segColisao: 0,
    segAdv: 0,
    priColisao: 0,
    priAdv: 0
}
export const FormularioResultado = (props) => {

    const { estadoModal, actions } = useContext(ContextHome)
    const [state, dispatch] = useReducer(appReducer, jogo);
    const [dataJogo, setDataJogo] = useState('');
    const [id, setId] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const config = {
            headers: { 'Authorization': "Bearer " + localStorage.getItem('isAdm') }
        }
        async function updateResultadoJogo() {
            if (props.props) {
               
                setLoading(false);
                const { data } = await Api.get(`rotasAdm/editar/${props.props}`, config)
                state.segColisao = data.segundo.colisao
                state.segAdv = data.segundo.adversario
                state.priColisao = data.primeiro.colisao
                state.priAdv = data.primeiro.adversario
                setDataJogo(data.data);
                setId(data._id);
                setLoading(true);
            } else {
                setId('');
                zeraState();
                setDataJogo('')
            }
        }
        updateResultadoJogo();
    }, [])
    function zeraState() {
        dispatch({ type: 'salvar' });
    }
    function dataResultado(e) {
        e.persist();
        e.preventDefault();
        const data = `${e.target.value}T18:31:00.480Z`;
        setDataJogo(data);
    }
    async function salva(e) {
        e.preventDefault();
        const config = {
            headers: { 'Authorization': "Bearer " + localStorage.getItem('isAdm') }
        }
        if (props.props) {
            let res = {
                _id: id,
                data: dataJogo,
                segundo: {
                    colisao: state.segColisao,
                    adversario: state.segAdv
                },
                primeiro: {
                    colisao: state.priColisao,
                    adversario: state.priAdv
                }
            }
            await Api.post('rotasAdm/update', res, config)
                .then(response => {
                    setDataJogo('');
                    state.segColisao = 0
                    state.segAdv = 0
                    state.priColisao = 0
                    state.priAdv = 0
                    console.log(state);
                    zeraState();
                    setTimeout(                        
                        actions({
                            type: 'setModal',
                            playload: !estadoModal
                        }),200
                        )
                }).catch(error => {
                    console.log(error);
                });
        } else {
            let res = {
                data: dataJogo,
                segundo: {
                    colisao: state.segColisao,
                    adversario: state.segAdv
                },
                primeiro: {
                    colisao: state.priColisao,
                    adversario: state.priAdv
                }
            }
            await Api.post('rotasAdm/criaPlacar', res, config)
                .then(response => {
                    zeraState();
                    state.segColisao = 0
                    state.segAdv = 0
                    state.priColisao = 0
                    state.priAdv = 0
                    console.log(state);
                    setDataJogo('');
                    setTimeout(                        
                        actions({
                            type: 'setModal',
                            playload: !estadoModal
                        }),200
                        )
                }).catch(error => {
                    console.log(error);
                });
        }
        dispatch({ type: 'salvar' });
    }
    return (
        <>
            <ContainerForm>
                <ContainerEnd>
                    <ButtonEnd onClick={() => actions({
                        type: 'setModal',
                        playload: !estadoModal
                    })}>X</ButtonEnd>
                </ContainerEnd>
                <ContainerResultado>
                    <InputDate type="date" id="data" value={dataJogo.slice(0, 10)} onChange={dataResultado} />
                    <TextoQuadro>SEGUNDO QUADRO</TextoQuadro>
                    <ContainerTime>
                        <TextoTime>Colisão</TextoTime>
                        <TextoTime>Adversário</TextoTime>
                    </ContainerTime>
                    <Form>
                        <SegundoInput type="button" value="+" onClick={() => dispatch({ type: "segundoMais" })} />
                        <SegundoResultado>{state.segColisao}</SegundoResultado>
                        <SegundoInput type="button" value="-" onClick={() => dispatch({ type: "segundoMenos" })} />
                        <SegundoResultado>X</SegundoResultado>
                        <SegundoInput type="button" value="+" onClick={() => dispatch({ type: "segundoMaisAdv" })} />
                        <SegundoResultado>{state.segAdv}</SegundoResultado>
                        <SegundoInput type="button" value="-" onClick={() => dispatch({ type: "segundoMenosAdv" })} />
                    </Form>
                    <TextoQuadro>PRIMEIRO QUADRO</TextoQuadro>
                    <ContainerTime>
                        <TextoTime>Colisão</TextoTime>
                        <TextoTime>Adversário</TextoTime>
                    </ContainerTime>
                    <Form>
                        <SegundoInput type="button" name="colisao" value="+" onClick={() => dispatch({ type: "primeiroMais" })} />
                        <SegundoResultado>{state.priColisao}</SegundoResultado>
                        <SegundoInput type="button" name="colisao-" value="-" onClick={() => dispatch({ type: "primeiroMenos" })} />
                        <SegundoResultado>X</SegundoResultado>
                        <SegundoInput type="button" name="adv" value="+" onClick={() => dispatch({ type: "primeiroMaisAdv" })} />
                        <SegundoResultado>{state.priAdv}</SegundoResultado>
                        <SegundoInput type="button" name="adv-" value="-" onClick={() => dispatch({ type: "primeiroMenosAdv" })} />
                    </Form>
                    <ContainerButton>
                        {isLoading &&
                            <SalvaResultado onClick={salva}>SALVAR</SalvaResultado>
                        }
                    </ContainerButton>
                </ContainerResultado>
            </ContainerForm>
        </>
    )
}

