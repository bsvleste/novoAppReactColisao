import React from 'react';
import { ListaBid,IconCheck } from '../BidStyle';
import { MdCheckCircle,MdCancel } from "react-icons/md";
export default function Chip({bid}) {
    return (
        <>
            {bid.map((nome, index) => {
                let nomes = nome.usuario.nome.split(' ');
                if(nome.bid ){
                    nomes.bid = "check"
                }else{
                    nomes.bid = "dont"
                }
                return (
                    <ListaBid key={index} >
                        <div className="iconesBid">
                            <p>{nomes[0]}</p>
                            {{
                                check:
                                <IconCheck check='check'>
                                       <MdCheckCircle size={24}/>
                                </IconCheck>
                                , dont: 
                                <IconCheck>
                                       <MdCancel size={24}/>
                                </IconCheck>
                            }[nomes.bid]}
                        </div>
                    </ListaBid>
                )
            })}
        </>
    )
}

