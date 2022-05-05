import React, { useContext, useState, useEffect } from 'react'
import ContextHome from '../store/contextHome';
import { SegundoQuadro, ContainerButton, EditaResultado, ButtonResultado,  Cards, CardHeader, Texto, TextoData, TextoH3, TextoH4, CardMain, MainCard, Quadro, Resultado, Img } from '../HomeStyle';
import { Cabecalho,Main } from '../../../globalcss/ComponeteGlobal';
import Api from '../../../Services/Api';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { FormularioResultado } from '../FormularioResultado';
import socket from 'socket.io-client';

export default function Modal() {
    const { estadoModal, actions } = useContext(ContextHome)

    const [jogos, setJogos] = useState([]);
    const [editarJogo, setEditarJogo] = useState();
    const [is_Adm, useIsAdm] = useState('');
    const local = 'http://192.168.15.72:3333';
    const remoto = 'https://backendcolisao.herokuapp.com';

    useEffect(() => {
        const { isAdm } = JSON.parse(localStorage.getItem('usuario'));
        useIsAdm(isAdm);
    });

    useEffect(() => {
        function listaPlacar() {
            const config = {
                headers: {                    
                     'Authorization': `Bearer${localStorage.getItem('token')}` }
            }
            //const io = socket('https://backendcolisao.herokuapp.com', config);
            //const io = socket('http://10.60.16.153:3001', config);
            const io = socket(remoto, config);
            io.on('placar', data => {
                setJogos(data);
            });

        }
        async function getJogos() {
            const config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }
            const response = await Api.get('placar/', config);
            setJogos(response.data);
        }
        listaPlacar();
        getJogos();
    }, []);

    function editarResultado(e) {
        setEditarJogo(e.target.value)
        actions(
            {
                type: 'setModal',
                playload: !estadoModal,
            }
        );
    }
    function novoresultado() {
        actions(
            {
                type: 'setModal',
                playload: !estadoModal,
            }
        );
        setEditarJogo();
    }
    async function deletar(res) {
        try{

            let data = format(new Date(res.data), "dd 'de' MMMM", { locale: pt })
            
            if (window.confirm(`Deletar o Placar do dia ${data}`)) {
                
                const config = {
                    headers: { 'Authorization': "Bearer " + localStorage.getItem('isAdm') }
                }
                let {_id} = res;
                await Api.post(`rotasAdm/deleta/${_id}`,{}, config).then(resp=>{
                    console.log(resp.data);
                })  
                .catch(error=>{
                      console.log(error);
                
                  });;
            }
        }catch(err){
            console.log(err)
        }
    }
    return (
        <>
            <Cabecalho>
                <Texto>Placar dos Jogos</Texto>
                {is_Adm &&
                    <ButtonResultado onClick={novoresultado}>{estadoModal ? '-' : '+'}</ButtonResultado>
                }
            </Cabecalho>
            <Main>
                {estadoModal && <FormularioResultado props={editarJogo} />}
                {
                    jogos &&
                    jogos.map(res => (
                        <Cards key={res._id}>
                            <CardHeader>
                                <TextoData>
                                    {
                                        format(new Date(res.data), "dd 'de' MMMM", { locale: pt })
                                    }
                                </TextoData>
                            </CardHeader>
                            <CardMain >
                                <MainCard>
                                    <SegundoQuadro>
                                        <TextoH4>2º Quadro</TextoH4>
                                        <Resultado>
                                            <Img src={!navigator.onLine ? 'https://backendcolisao.herokuapp.com/files/logoColisao.png' : '../../../../img/logoColisao.png'} alt="colisao" />
                                            <TextoH3>{res.segundo.colisao} X {res.segundo.adversario}</TextoH3>
                                            <Img src={!navigator.onLine ? 'https://backendcolisao.herokuapp.com/files/logoColisao.png' : '../../../../img/logoColisao.png'} alt="colsao" />
                                        </Resultado>
                                    </SegundoQuadro>
                                    
                                    <Quadro>
                                        <TextoH4>1º Quadro</TextoH4>
                                        <Resultado >
                                            <Img src={!navigator.onLine ? 'https://backendcolisao.herokuapp.com/files/logoColisao.png' : '../../../../img/logoColisao.png'} alt="colsao" />
                                            <TextoH3>{res.primeiro.colisao} X {res.primeiro.adversario}</TextoH3>
                                            <Img src={!navigator.onLine ? 'https://backendcolisao.herokuapp.com/files/logoColisao.png' : '../../../../img/logoColisao.png'} alt="colsao" />
                                        </Resultado>
                                    </Quadro>
                                        <ContainerButton>
                                            {is_Adm &&
                                                <EditaResultado onClick={editarResultado} value={res._id}>Editar</EditaResultado>
                                            }
                                            {is_Adm &&
                                                <EditaResultado onClick={() => deletar(res)} >Deletar</EditaResultado>
                                            }
                                        </ContainerButton>
                                </MainCard>
                            </CardMain>
                        </Cards>
                    ))
                }
            </Main>
        </>
    )
}