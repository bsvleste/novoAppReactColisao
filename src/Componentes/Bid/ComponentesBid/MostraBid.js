import React, { useState, useEffect } from 'react';
import Api from '../../../Services/Api';
import socket from 'socket.io-client';

import Chip from './Chip';

export default function MostraBid() {
    const [bid, setBid] = useState([]);

    useEffect(() => {
        function subriscrebleToEvents() {
            let config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }

            //const  io = socket('https://backendcolisao.herokuapp.com', config);
            //const io = socket('http://10.60.16.153:3001', config);
            const io = socket('http://localhost:3001', config);
            io.on('bid', data => {
                setBid(data);
            });
        }
        subriscrebleToEvents();
    }, []);

    useEffect(() => {
        async function getBid() {
            let config = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }
            try {
                await Api.get('/bid', config).then((results) => {
                    setBid(results.data);
                })
            } catch (e) {
            }
        }
        getBid();
    }, [])
    return (
        <>
            <Chip bid={bid} />
        </>
    )
}
