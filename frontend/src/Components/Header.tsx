import React from 'react';
import "./header.css"
import logo from '../img/LOGO_H_1.png';

const Header = () =>{
    return(
        <>
        <header className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Leodega logo"/>
            </div>

            <ul className="navbar-links">
                <li>Conviértete en inquilino</li>
                <li>Bodegas populares</li>
                <li>Cómo trabajamos</li>
                <li>Por qué escogernos</li>
            </ul>

            <div className="navbar-actions">
                <button className="btn-login">Iniciar Sesión</button>
                <button className="btn-register">Registrarse</button>
            </div>
        </header>
        </>
    );
}
export default Header;