import React, { useState,useContext } from 'react';
import '../Bid.css';
import FormularioBid from './FormularioBid';
import { ButtonRg } from '../BidStyle';
import ContextBid from '../store/contextBid';

export default function RespostaBid() {
  
    const {estadoModal, actions} = useContext(ContextBid);
    
    function modalEstado(){
        actions(
            {
                type: 'setModal',
                playload: !estadoModal,
            }
        );
    }
    return (
        <>
            <ButtonRg onClick={modalEstado}>BID</ButtonRg>
            {estadoModal && <FormularioBid />}
        </>
    )
}


