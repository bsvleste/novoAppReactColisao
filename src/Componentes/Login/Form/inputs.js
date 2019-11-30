import React from 'react';
import { ContainerLogin, LoginH1, LoginForm, InputLogin, LoginLabel, ButtonLogin, LinkLogin } from '../LoginStyle';

export const Inputs = () => {
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
                            <LinkLogin href='/cadastro'>Cadastar jogadores</LinkLogin>
                        </LoginForm>
                    </>
                }
            </ContainerLogin>
        </>
    )
}