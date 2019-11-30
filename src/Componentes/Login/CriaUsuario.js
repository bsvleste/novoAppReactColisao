import React, { Component } from 'react';
import Api from '../../Services/Api';
import { LoginForm, ContainerLogin, LoginH3, LoginLabel, InputLogin, ButtonLogin, LinkLogin, InputFile, LabelFile } from './LoginStyle';

class CriaUsuario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            senha: undefined,
            email: undefined,
            nome: '',
            teste:[],
            singUP: {
                success: undefined,
                message: undefined,
            }
        }
    }

    handlerSubmibt = async (e) => {
        e.preventDefault();
        
        let userDataSend = {
            userData: {
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha,
            }
        }
        await Api.post('/auth/create',userDataSend)
            .then(response => {
                console.log(response);
                if (response.data.success) {
                    this.setState({
                        ...this.state,
                        singUP: {
                            success: true,
                            message: response.data.message
                        }
                    })
                } else {
                    this.setState({
                        ...this.state,
                        singUP: {
                            success: false,
                            message: response.data.message,
                        }
                    })
                }
            }); 

    }
    handlerNome = (e) => {
        this.setState({ nome: e.target.value });
    }
    handlerEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    handlerSenha = (e) => {
        this.setState({ senha: e.target.value });
    }
    /* handleFotoPerfil = (e) => {
        let data  = new FormData();
        let fotoPerfil = e.target.files[0];
        data.append('image',fotoPerfil);
        this.setState({fotoPerfil:data});
    } */
    static displayName = 'FormFifa';
    render() {
        return (
            <>
                <ContainerLogin>
                    <LoginH3>Cadastro Jogador</LoginH3>
                    {
                        this.state.singUP.success !== undefined ? (
                            this.state.singUP.success ?
                                <div className="alert alert-success">
                                    <p>{this.state.singUP.message}</p>
                                </div>
                                :
                                <div className="alert alert-danger">
                                    <p>{this.state.singUP.message}</p>
                                </div>
                        ) : ''

                    }
                    <LoginForm onSubmit={this.handlerSubmibt}>
                        <LoginLabel htmlFor="nome">Nome</LoginLabel>
                        <InputLogin type="text" id="nome" placeholder="Digite seu nome" onChange={this.handlerNome} />
                        <LoginLabel htmlFor="email">Email</LoginLabel>
                        <InputLogin type="email" id="email" placeholder="Digite seu email" onChange={this.handlerEmail} />
                        <LoginLabel htmlFor="senha">Senha</LoginLabel>
                        <InputLogin type="password" id="senha" placeholder="Digite seu senha" onChange={this.handlerSenha} />
                        
{/*                         <InputFile type='file' id="avatar" name="avatar" onChange={this.handleFotoPerfil} />
                        <LabelFile htmlFor='avatar'><i className="fas fa-upload fa-2x"></i> <strong>Foto do Perfil</strong> </LabelFile>
                        
 */}                        <ButtonLogin>Enviar</ButtonLogin>
                        <LinkLogin href="#" onClick={() => { this.props.history.goBack() }}>Voltar </LinkLogin>
                    </LoginForm>
                </ContainerLogin>
            </>
        );
    }
}

export default CriaUsuario;