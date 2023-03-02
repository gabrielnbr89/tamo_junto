import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="holder">
                <img src="https://via.placeholder.com/100" alt="Al Cuidado" />
                <div className='estatica'>
                    <ul className={`items ${isOpen && "open"}`}>
                        <li><NavLink to="/" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>Home</NavLink></li>
                        <li><NavLink to="/nos" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>sobre nós</NavLink></li>
                        <li><NavLink to="/transparencia" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>transparencia</NavLink></li>
                        <li><NavLink to="/stakeholders" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>stakeholders</NavLink></li>
                        <li><NavLink to="/associado" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>area do associado</NavLink></li>
                        <li><NavLink to="/contato" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>Contato</NavLink></li>
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