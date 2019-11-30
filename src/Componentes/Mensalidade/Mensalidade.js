import React, { Component } from 'react';
import './Mensalidade.css';
import Api from '../../Services/Api';
import Loading from '../Loading';
import { Cabecalho, Main } from '../../globalcss/ComponeteGlobal';

class Mensalidade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meses: [],
            mes: [
                { id: 1, descricao: 'janeiro' },
                { id: 2, descricao: 'fevereiro' },
                { id: 3, descricao: 'março' },
                { id: 4, descricao: 'abril' },
                { id: 5, descricao: 'maio' },
                { id: 6, descricao: 'junho' },
                { id: 7, descricao: 'julho' },
                { id: 8, descricao: 'agosto' },
                { id: 9, descricao: 'setembro' },
                { id: 10, descricao: 'outubro' },
                { id: 11, descricao: 'novembro' },
                { id: 12, descricao: 'dezembro' }
            ],
            flag: true,
            descricao: '',
            id: '',
            menuFechado: 'none',
            pago: false,
            isLoading: 'false',
            chamaMes: '',
            valor: '0'
        }
    }
    async componentDidMount() {
        this.getMensalidade();
        this.menuAutomatico();
    }
    /*componentWillUpdate(newProps,newState){
        console.log("newProsp",newProps);
        console.log('newState',newState);
    }*/
    getMensalidade = async () => {
        let config = {
            headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
        }
        try {
            this.setState({ isLoading: true }, async () => {
                await Api.get(`/mensalidade/descricao/${this.state.chamaMes}`, config).then((results) => {
                    results.data.map(desc => (
                        this.setState({
                            meses: desc.mensalidade,
                            descricao: desc.descricao,
                            id: desc._id,
                            isLoading: false,
                        })
                    ));

                });
            });
        } catch (e) {
            console.log(e);
        }
    }
    menuAutomatico = () => {
        if (this.state.flag) {
            this.setState({ flag: false });
        } else {
            this.setState({ flag: true });
        }
    }
    handlerValor = (e) => {
        let mensal = [...this.state.meses];
        const status = e.target.value > 0 ? 'pago' : 'pendente';
        mensal.forEach(res => {
            if (res._id === e.target.id) {
                res.valor = e.target.value;
                res.status = status;
            }
        });
        this.setState({ meses: mensal });
    }
    handlerMensalidade = (e) => {
        try {
            this.setState({ chamaMes: e.target.id });
            this.menuAutomatico();
        } catch (e) {
            console.log('error', e);
        }
        this.getMensalidade();
    }
    handlerSalvaMensalidade = async (jog) => {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem('token')
        }
        const sendMensalidade = {
            id: this.state.id,
            descricao: this.state.descricao,
            _id: jog._id,
            valor: jog.valor,
            status: jog.status,
            nome: jog.nome
        }
        console.log(sendMensalidade);
        await Api.post('/mensalidade/update', sendMensalidade, { headers: header }).then((res) => {
            console.log(res.data);
        });
    }
    salvaTodos(todos) {
        console.log("salvei todos", todos);
    }
    render() {
        const borderRed = {
            border: '1px solid red'
        }
        const borderGreen = {
            border: '1px solid #11FF00'
        }
        const { meses, isLoading, descricao } = this.state;
        const listaMes = meses.map((desc, index) => {
            return (
                <div className="col-sm-6" key={index}>
                    <div className="card-mensalidade">
                        <div className="mensalidade">
                            <label className={desc.valor > 0 ? "pago" : "pendente"}>
                                <h5>{desc.nome}  R$ {desc.valor} </h5>
                            </label>
                            <span className="link" style={desc.valor > 0 ? borderGreen : borderRed} onClick={() => { this.handlerSalvaMensalidade(desc) }}><i className="far fa-check-square"></i></span>
                        </div>
                        <input type="range" min="0" max="100" className={desc.valor > 0 ? 'slider2' : 'slider1'} id={desc._id} name={desc.nome} data-status={desc.status} onChange={this.handlerValor} defaultValue={desc.valor} />
                    </div>
                </div>
            )
        })
        return (
            <>
                {/*                 <nav className="fix-top" >
                    <div onClick={this.menuAutomatico}>


                        <h2>Menu Mensalidade</h2>
                    </div>
                </nav> */}
                <Cabecalho>
                    <div onClick={this.menuAutomatico}>
                        <h2>Mensalidade</h2>
                    </div>
                </Cabecalho>
                <nav className="menu" style={{ display: this.state.flag ? '' : 'none' }}>
                    <ul className="">
                        {
                            this.state.mes.map((n, index) => {
                                return <li key={index}><span onClick={this.handlerMensalidade} id={n.descricao}> {n.descricao}</span></li>
                            })
                        }
                    </ul >
                </nav >

                <Main>
                    {isLoading &&
                        <Loading />
                    }
                    {listaMes}
                </Main>
                

            </>
        )
    }
}

export default Mensalidade;