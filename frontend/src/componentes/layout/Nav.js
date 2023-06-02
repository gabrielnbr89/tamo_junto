import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';
export const io=true;

const Nav = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="holder">
                <a href='/'><img src="img/logo.png" alt="TMJ" /></a>
                <div className='estatica'>
                    <ul className={`items ${isOpen && "open"}`}>
                        <li><NavLink to="/" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>HOME</NavLink></li>
                        <li><NavLink to="/nos" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>SOBRE NÓS</NavLink></li>
                        <li><NavLink to="/transparencia" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>TRANSPARENCIA</NavLink></li>
                        <li><NavLink to="/stakeholders" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>STAKEHOLDERS</NavLink></li>
                        <li><NavLink to="/associado" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>AREA DO ASSOCIADO</NavLink></li>
                        <li><NavLink to="/contato" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>CONTATO</NavLink></li>
                    </ul>   
                </div>
            <div className={`dinamica ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
export default Nav;