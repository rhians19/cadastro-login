import React from "react";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='r-container'>
            <span className='title'>Bem vindo</span>
            <span className='sub-title'>Registro</span>
            <form>
                <input type="text" placeholder='Digite o Nome' />
                <input type="email" placeholder='Digite o E-mail' />
                <input type="text" placeholder='Digite o Número de telefone' />
                <input type="password" placeholder='Digite a Senha' />
                <button>Registrar</button>
            </form>
            <p>Você tem conta? <Link to="/Login">Login</Link></p>
        </div>
    )
};

export default Register;