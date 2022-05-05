import React, { Component } from 'react';
import Api from '../../Services/Api';
import Loading from '../../Componentes/Loading';
import { ContainerLogin, LoginH1, LoginForm, InputLogin, LoginLabel, ButtonLogin, LinkLogin } from './LoginStyle';

class Login extends Component {
    state = {
        senha: undefined,
        email: undefined,
        singUP: {
            success: undefined,
            message: undefined,
        },
        mostraMsg: undefined,
        isLoading: false
    }

    async componentDidMount() {
        const token = localStorage.getItem('token');
        if (token)
            this.props.history.push('/Home');
    }
    handlerSubmit = (e) => {
        e.preventDefault();
        let userDataSend = {
            
                email: this.state.email,
                senha: this.state.senha,
           
        }
        this.setState({ isLoading: true }, async () => {
            await Api.post('auth/login', userDataSend)
                .then(response => {
                    if (response.data.success) {
                        this.setState({
                            ...this.state,
                            singUP: {
                                success: true,
                                message: "Logado com sucesso"
                            },
                            isLoading: false,
                        })
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
                        
                        if (response.data.isAdm) {
                            localStorage.setItem('isAdm', response.data.isAdm);
                        }
                        this.props.history.push("/home");

                    } else {
                        this.setState({
                            ...this.state,
                            singUP: {
                                success: false,
                                message: response.data.message,
                            },
                            isLoading: false,
                        
                        })
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    this.setState({
                        ...this.state,
                        singUP: {
                            success: false,
                            message: "Email ou senha Invalidos",
                        },
                        isLoading: false,
                    })
                });

        })
    }
    handlerEmail = (e) => {
        this.setState({ email: e.target.value, singUP: { success: undefined } });
    }
    handlerSenha = (e) => {
        this.setState({ senha: e.target.value, singUP: { success: undefined } });
    }
    handlermuda = () => {
        this.setState({ mostraMsg: true });
    }
    limpainterval = () => {

    }
    static displayName = 'FormFifa';
    render() {
        const { isLoading } = this.state;
        return (
            <>
                <ContainerLogin>
                    {isLoading &&
                        <Loading />
                    }
                    {
                        this.state.singUP.success !== undefined ? (
                            this.state.singUP.success ?
                                ''
                                :
                                <div className="alert alert-danger">
                                    <p>{this.state.singUP.message}</p>
                                </div>
                        ) : ''

                    }{isLoading ? '' :
                        <>
                            <LoginH1>Login</LoginH1>                            
                            <LoginForm onSubmit={this.handlerSubmit}>
                                <LoginLabel htmlFor='email'>Email</LoginLabel>
                                <InputLogin type='email' id="email" placeholder="Digite seu email" onChange={this.handlerEmail} />
                                <LoginLabel htmlFor='senha'>Senha</LoginLabel>
                                <InputLogin type='password' id="sennha" placeholder="Digite sua senha" onChange={this.handlerSenha} />
                                <ButtonLogin>Enviar</ButtonLogin>
                                <LinkLogin href='/cadastro'>Cadastar Jogadores</LinkLogin>
                            </LoginForm>
                        </>
                    }
                </ContainerLogin>
            </>
        );
    }
}

export default Login; 