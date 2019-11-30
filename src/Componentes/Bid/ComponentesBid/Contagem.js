import React, { Fragment } from 'react'
const Contagem = ({ qtdBid }) => (
    <>
        <div className="row teste">
            {
                qtdBid.map((qtd, index) => {
                    return (
                        <Fragment key={index} >
                            {{
                                check:
                                    <div className='col-4'>
                                        <span className="check"  >
                                            <i className="fa fa-check-circle fa-2x"></i>
                                            {qtd.count}
                                        </span>
                                    </div>
                                , dont:
                                    <div className='col-4'>
                                        <span className="DontCheck" >
                                            <i className="fa fa-times-circle fa-2x"></i>
                                            {qtd.count}
                                        </span>
                                    </div>
                            }[qtd._id]}
                        </Fragment>
                    );
                })
            }
        </div>
    </>
);
export default Contagem;