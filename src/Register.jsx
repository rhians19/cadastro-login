import React from "react";
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "./services/firebaseConfig";



export function Register () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    function handleSignOut(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if (loading) {
        return <p>carregando...</p>;
      }
    
    return (
        <div className='r-container'>
            <span className='title'>Bem vindo</span>
            <span className='sub-title'>Registro</span>
            <form>
                <div>
                    <input type="email" placeholder='Digite o E-mail' />
                    onChange={(e) => setEmail(e.target.value)}
                </div>
                <div>
                    <input type="password" placeholder='Digite a Senha' />
                    onChange={(e) => setPassword(e.target.value)}
                </div>

                <button onClick={handleSignOut}>Registrar</button>
            </form>
            <p>Você tem conta? <Link to="/Login">Login</Link></p>
        </div>
    )
    
};

export default Register;