import React, { useState, useEffect } from 'react';
import Api from '../../../Services/Api';
import socket from 'socket.io-client';

import Chip from './Chip';

export default function MostraBid() {
    const [bid, setBid] = useState([]);
    const local = 'http://192.168.15.72:3333';
    const remoto = 'https://backendcolisao.herokuapp.com';

    useEffect(() => {
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
        function subriscrebleToEvents() {
            let config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }

            //const  io = socket('https://backendcolisao.herokuapp.com', config);
            //const io = socket('http://10.60.16.153:3001', config);
            const io = socket(remoto, config);
            io.on('bid', data => {
                setBid(data);
            });
        }
        subriscrebleToEvents();
        deletaBidRealTime();
    }, []);

    useEffect(() => {
        async function getBid() {
            let config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }
            try {
                await Api.get('bid/', config).then((results) => {
                    setBid(results.data);
                })
            } catch (e) {
            }
        }
        getBid();
    }, [])

   function mostraBid(bid){
       if(bid.message === "Bid negado"){
           return ( <div></div> )
       }else{
       return  <Chip bid={bid} />
       }
   }
    return (
        <>
        {
           mostraBid(bid)
        }
        </>
    )
}
