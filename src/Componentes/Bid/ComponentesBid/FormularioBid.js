import React, { useState,useContext } from 'react';
import { Botao, CardBid, HeaderBid, FechaForm, MainFormBid, Check, IconCheck, Dont,ButtonEnd } from '../BidStyle';
import Api from '../../../Services/Api';
import ContextBid from '../store/contextBid';

export default function FormularioBid() {
    const [respostaBid, useRespostaBid] = useState();
    const {estadoModal, actions} = useContext(ContextBid);
    
    function modalEstado(){
        actions(
            {
                type: 'setModal',
                playload: !estadoModal,
            }
        );
    }

    const salvaBid = async (e, func) => {
        const { _id } = JSON.parse(localStorage.getItem('usuario'));
        const header = {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem('token')
        }
       
        let bidDataSend = {           
                bid: respostaBid,
                usuario: _id,          
        }
        await Api.post('bid/addBid', bidDataSend, { headers: header }).then(() => {
        });
        setTimeout(modalEstado,200)
    }
    function setRespostaBid(e) {
        let resp = 0;
        if(e.target.value === "sim"){
        resp = 1;            
        }else{
            resp = 0
        }
     
        useRespostaBid(resp);
    }
    return (
        <>
            <CardBid>
                <HeaderBid>
                    <FechaForm >
                        <ButtonEnd onClick={modalEstado}>X</ButtonEnd>
                        </FechaForm>
                </HeaderBid>
                <MainFormBid>
                    <Check className="form-group">
                        <IconCheck check>SIM</IconCheck>
                        <label className="switch">
                            <input type="radio" name="radio" id="check" value="sim" onChange={setRespostaBid} />
                            <span className="slider round"></span>
                        </label>
                    </Check>
                    <Dont className="form-group">
                        <IconCheck>NÃO</IconCheck>
                        <label className="switch">
                            <input type="radio" name="radio" value="nao" onChange={setRespostaBid} />
                            <span className="slider round"></span>
                        </label>
                    </Dont>
                    <Botao onClick={salvaBid}>Enviar</Botao>
                </MainFormBid>
            </CardBid>
        </>
    )
}


