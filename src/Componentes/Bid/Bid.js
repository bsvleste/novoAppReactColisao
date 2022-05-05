import React, { useState, useEffect } from 'react';
import RespostaBid from './ComponentesBid/RespostaBid';
import MostraBid from './ComponentesBid/MostraBid';
import Api from '../../Services/Api';
import Contagem from './ComponentesBid/Contagem';
import socket from 'socket.io-client';
import { Cabecalho,Main,DeletaBid} from '../../globalcss/ComponeteGlobal';
import ContextBid from './store/contextBid';
import useGlobalBid from './store/useGlobalBid';

export default function Bid() {
    const [contagem, setContagem] = useState([]);
    const [statusBid, setStatusBid] = useState([]);
    const [bid, setBid] = useState([]);
    const [is_Adm, useIsAdm] = useState('');
    const store = useGlobalBid();
    const local = 'http://192.168.15.72:3333';
    const remoto = 'https://backendcolisao.herokuapp.com';
/**pegar o status do bid para liberar o bid */
    useEffect(() => {
        const { isAdm } = JSON.parse(localStorage.getItem('usuario'));
        useIsAdm(isAdm);
    });
    useEffect(() => {
        async function getStatus() {
            let config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('isAdm') }
            }
            const { data } = await Api.get('placar/status', config);            
            setStatusBid(data);  
              
        }
        getStatus()
    }, [statusBid]);
    useEffect(() => {        
         async function getContagem() {
            let config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }
            const { data } = await Api.get('/bid', config);
            setContagem(data);           
        } 
       
        /* async function getContagemRealTime() {
            let config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }

            //const  io = socket('https://backendcolisao.herokuapp.com', config);
            //const io = socket('http://10.60.16.153:3001', config);
            const io = socket(remoto, config);
            io.on('contagem', data => {
                
                setContagem(data);
            });
        } 
        async function deletaBidRealTime() {
            let config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('isAdm') }
            }

            //const  io = socket('https://backendcolisao.herokuapp.com', config);
            //const io = socket('http://10.60.16.153:3001', config);
            const io = socket(remoto, config);
            io.on('deletaBid', data => {
                
                setBid(data);
            });
        }
        deletaBidRealTime();
        /* getContagemRealTime();
        */
        getContagem();
       
      
    }, []);
    async function deletar() {
        try{
            const config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('isAdm') }
            }
             if (window.confirm(`Deletar o Bid`)) {                
                
                 await Api.post("rotasAdm/deletaBid", {},config).then(resp=>{
                     const io = socket(remoto, config);
                     io.on('listStatus', data => {
                        console.log(`REal time ${data}`)
                        setStatusBid(data);
                
            });
                    })  
                    .catch(error=>{
                        console.log(error)
                        
                    });;
                    
                }
        }catch(err){
            console.log(err)
        }      
    }
    async function liberaBid() {
        try{
            const config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('isAdm') }
            }
             if (window.confirm(`Liberar o Bid`)) {                
                
                 await Api.post("rotasAdm/liberaBid", {},config).then(resp=>{
                    const io = socket(remoto, config);
                    io.on('listStatus', data => {
                       setStatusBid(data);
                      
           });
                    })  
                    .catch(error=>{
                        console.log(error)
                        
                    });;
                    
                }
        }catch(err){
            console.log(err)
        }      
    }
   
    function mostraButtonCabecalho(){     
    /* statusBid.map(resp => teste = resp.status)    */     
    if(statusBid.status === false){
        return  <DeletaBid onClick={liberaBid}>Liberar o Bid</DeletaBid>
    }else{
        return  <DeletaBid onClick={deletar}>Excluir bid</DeletaBid>
        }
    }
    return (
        <>
            <Cabecalho>                
            {
                is_Adm &&
                    mostraButtonCabecalho(statusBid) 
            }
            {
                /* statusBid.status &&
                <Contagem qtdBid={contagem}/> */
            }
            </Cabecalho>
            <ContextBid.Provider value={store}>
                <Main>                   
                    <>
                        {
                            statusBid.status &&
                            <RespostaBid />
                        }
                        <MostraBid />
                        </>
                  
                </Main>
            </ContextBid.Provider>
        </>
    );
}

