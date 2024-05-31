import React from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='r-container'>
            <span className='title'>Bem Vindo</span>
            <span className='sub-title'>Login</span>
            <form>
                <input type="email" placeholder='Digite o E-mail' />
                <input type="password" placeholder='Digite a Senha' />
                <button>Acessar</button>
            </form>
            <p>Você ainda não tem conta? <Link to="/Register">Registre-se</Link></p>
        </div>
    )
};

export default Login;
