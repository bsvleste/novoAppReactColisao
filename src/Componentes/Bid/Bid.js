import React, { Component, useState, useEffect } from 'react';
import RespostaBid from './ComponentesBid/RespostaBid';
import MostraBid from './ComponentesBid/MostraBid';
import Api from '../../Services/Api';
import Contagem from './ComponentesBid/Contagem';
import socket from 'socket.io-client';
import { Cabecalho,Main } from '../../globalcss/ComponeteGlobal';
import ContextBid from './store/contextBid';
import useGlobalBid from './store/useGlobalBid';

export default function Bid() {
    const [contagem, setContagem] = useState([]);
    const store = useGlobalBid();

    useEffect(() => {
        async function getContagem() {
            let config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }
            const { data } = await Api.get('/contagembid', config);
            setContagem(data);
        }
        async function getContagemRealTime() {
            let config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }

            //const  io = socket('https://backendcolisao.herokuapp.com', config);
            //const io = socket('http://10.60.16.153:3001', config);
            const io = socket('http://localhost:3001', config);
            io.on('contagem', data => {
                setContagem(data);
            });
        }
        getContagemRealTime();
        getContagem();
    }, []);

    return (
        <>
            <Cabecalho>
                <Contagem qtdBid={contagem} />
            </Cabecalho>
            <ContextBid.Provider value={store}>
                <Main>
                    <RespostaBid />
                    <MostraBid />
                </Main>
            </ContextBid.Provider>
        </>
    );
}

