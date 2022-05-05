import React, { Fragment } from 'react';
import { MdCheckCircle,MdCancel } from "react-icons/md";
const Contagem = ({ qtdBid }) => (
    <>
    
        <div className="row teste">
            {
                qtdBid.map((qtd, index) => {
                    let chekIsTrue = 0;
                    if(qtd._id){
                        chekIsTrue = "check"
                    }else{
                        chekIsTrue = "dont"
                    }
                    return (
                        <Fragment key={index} >
                            {{
                                check:
                                <div className='col-4'>
                                        <span className="check">
                                            <MdCheckCircle size={25}/>
                                            {qtd.count}
                                        </span>
                                    </div>
                                , dont:
                                <div className='col-4'>
                                        <span className="DontCheck" >
                                        <MdCancel size={25}/>
                                            {qtd.count}
                                        </span>
                                    </div>
                            }[chekIsTrue]}
                        </Fragment>
                    );
                })
            }
        </div>
  
    </>
);
export default Contagem;