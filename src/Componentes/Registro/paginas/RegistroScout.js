import React, { Component } from 'react';
import Api from '../../../Services/Api';
import './style.css';

export default class RegistroScout extends Component {
  state = {
    jogadores: [],
    scout: [],
    quadro: 0,
  }
  componentDidMount = async () => {
    const response = await Api.get('/jogador');
    this.setState({ jogadores: response.data });
    const registro = [];
    const { jogadores } = this.state;
    for (const i in jogadores) {
      let id = jogadores[i]._id;
      let nome = jogadores[i].nome;
      let fotoPerfil = jogadores[i].fotoPerfil
      //let nome = nomes.substring(0, 4).toLowerCase();
      registro.push({ id, nome,fotoPerfil, chuteagol: 0, gol: 0, assistencia: 0, faltascometidas: 0, faltassofridas: 0, desarmes: 0 })
    }
    this.setState({ scout: registro })
  }
  handlerQuadro = (e) => {
    this.setState({ quadro: e.target.value })
    console.log(this.state.quadro)
  }
  handlerChuteGol = (e) => {
    let guardaScout = [...this.state.scout];
    guardaScout.forEach(res => {
      if (res.id === e.target.id) {
        switch (e.target.title) {
          case 'chuteagol':
            if (e.target.name === "mais") {
              res.chuteagol++;
            } else {
              res.chuteagol--;
            }
            this.setState({ scout: guardaScout });
            break;
          case 'gol':
            if (e.target.name === "mais") {
              res.gol++;
            } else {
              res.gol--;
            }
            this.setState({ scout: guardaScout });
            break;
          case 'assistencia':
            if (e.target.name === "mais") {
              res.assistencia++;
            } else {
              res.assistencia--;
            }
            this.setState({ scout: guardaScout });
            break;
          case 'faltassofridas':
            if (e.target.name === "mais") {
              res.faltassofridas++;
            } else {
              res.faltassofridas--;
            }
            this.setState({ scout: guardaScout });
            break;
          case 'faltascometidas':
            if (e.target.name === "mais") {
              res.faltascometidas++;
            } else {
              res.faltascometidas--;
            }
            this.setState({ scout: guardaScout });
            break;
          case 'desarmes':
            if (e.target.name === "mais") {
              res.desarmes++;
            } else {
              res.desarmes--;
            }
            this.setState({ scout: guardaScout });
            break;
          default:
            break;
        }
      }
    })
  }

  salva = () => {
    console.log(this.state.scout);
  }
  render() {
    const { scout } = this.state;
    return (
      <>
        <div style={{ marginTop: '40px', marginBottom: '60px' }} className="container-registro ">
          <div className="input-group mb3" >
            <div className="input-group-prepend">
              <span className="input-group-text">Quadro</span>
            </div>
            <select name="" className="custom-select" onChange={this.handlerQuadro} value={this.state.quadro} id="groupSelect">
              <option value="2" on>2° Quadro</option>
              <option value="1">1° Quadro</option>
            </select>
          </div>
          <div className="">
            <img className="fundo " src="../../../../img/icones-fundo.png" alt="icones" />
            {scout &&
              scout.map((j, index) => (
                <div key={index} style={{ clear: 'right', marginTop: '30px' }}>
                  <img className="fotoPerfil" src={`http://localhost:3001/files/${j.fotoPerfil}`} alt="usuairo" />
                  <div className="botoesRegistro ">
                    <div className="chuteagol">
                      <button onClick={this.handlerChuteGol} name="mais" className="btn-chuteagol tamanho " title='chuteagol' id={j.id}>+</button>
                      <span >{j.chuteagol}</span>
                      <button onClick={this.handlerChuteGol} name="menos" className="btn-chuteagol tamanho" title='chuteagol' id={j.id}>-</button>
                    </div>
                    <div className="gol ">
                      <button onClick={this.handlerChuteGol} name="mais" className="btn-gol tamanho" title="gol" id={j.id}>+</button>
                      <span >{j.gol}</span>
                      <button onClick={this.handlerChuteGol} name="menos" className="btn-gol tamanho" title="gol" id={j.id}>-</button>
                    </div>

                    <div className="assistencia">
                      <button onClick={this.handlerChuteGol} name="mais" className="btn-assistencia tamanho " title="assistencia" id={j.id}>+</button>
                      <span >{j.assistencia}</span>
                      <button onClick={this.handlerChuteGol} name="menos" className="btn-assistencia tamanho" id={j.id} title="assistencia">-</button>
                    </div>

                    <div className="faltascometidas ">
                      <button onClick={this.handlerChuteGol} name="mais" className="btn-faltascometidas tamanho" title="faltascometidas" id={j.id}>+</button>
                      <span >{j.faltascometidas}</span>
                      <button onClick={this.handlerChuteGol} name="menos" className="btn-faltascometidas tamanho" id={j.id} title="faltascometidas">-</button>
                    </div>

                    <div className="faltassofridas">
                      <button onClick={this.handlerChuteGol} name="mais" className="btn-faltassofridas tamanho" title="faltassofridas" id={j.id}>+</button>
                      <span >{j.faltassofridas}</span>
                      <button onClick={this.handlerChuteGol} name="menos" className="btn-faltassofridas tamanho " id={j.id} title="faltassofridas">-</button>
                    </div>


                    <div className="desarmes ">
                      <button onClick={this.handlerChuteGol} name="mais" className="btn-desarmes  tamanho" id={j.id} title="desarmes">+</button>
                      <span >{j.desarmes}</span>
                      <button onClick={this.handlerChuteGol} name="menos" className="btn-desarmes  tamanho" id={j.id} title="desarmes">-</button>
                    </div>


                    {/*                   <input type="number" id={j.id} name="chuteagol" className=" chuteagol" defaultValue={j.chuteagol} onClick={this.handlerChuteGol} />
                  <input type="number" id={j.id} name="passe" className=" assistencia" defaultValue={j.passe} onClick={this.handlerPasse} />
                  <input type="number" id={j.id} name="faltas" className=" faltasofridas" defaultValue={j.faltas} onClick={this.handlerFaltas} />
                  <input type="number" id={j.id} name="faltascometidas" className=" faltascometidas" defaultValue={j.faltascometidas} onClick={this.handlerFaltasCometidas} />
                  <input type="number" id={j.id} name="passe" className=" assistencia" defaultValue={j.passe} onClick={this.handlerPasse} />
                  <input type="number" id={j.id} name="faltas" className=" faltasofridas" defaultValue={j.faltas} onClick={this.handlerFaltas} />
                */}
                  </div>
                </div>
              ))
            }
          </div>
          <div className="marginBotao">
            <button onClick={this.salva} className="btn-salvar">Salvar</button>
          </div>
        </div>
      </>
    );
  }
}
