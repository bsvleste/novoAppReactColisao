import React from 'react';
import { ListaBid,IconCheck } from '../BidStyle';

export default function Chip({bid}) {
    return (
        <>
            {bid.map((nome, index) => {
                let nomes = nome.usuario.nome.split(' ');
                return (
                    <ListaBid key={index} >
                        <div className="iconesBid">
                            <p>{nomes[0]}</p>
                            {{
                                check:
                                <IconCheck check='check'>
                                        <i>$</i>
                                </IconCheck>
                                , dont: 
                                <IconCheck>
                                        <i>X</i>
                                </IconCheck>
                            }[nome.bid]}
                        </div>
                    </ListaBid>
                )
            })}
        </>
    )
}

