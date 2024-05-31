import React from "react";
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "./services/firebaseConfig";

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    function handleSignIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (loading) {
        return <p>carregando...</p>;
      }
      if (user) {
        return console.log(user);
      }

    return (
        <div className='r-container'>
            <span className='title'>Bem vindo</span>
            <span className='sub-title'>Login</span>
            <form>
                <div>
                    <input type="email" placeholder='Digite o E-mail' />
                    onChange={(e) => setEmail(e.target.value)}
                </div>
                <div>
                    <input type="password" placeholder='Digite a Senha' />
                    onChange={(e) => setPassword(e.target.value)}
                </div>
                <button onClick={handleSignIn}>Acessar</button>
            </form>
            <p>Você ainda não tem conta? <Link to="/Register">Registre-se</Link></p>
        </div>
    )

}

export default Login;
