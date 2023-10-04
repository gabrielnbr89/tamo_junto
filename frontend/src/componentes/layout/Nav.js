import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';
export const io=true;

const Nav = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="holder">
                <a href='/'><img src="https://via.placeholder.com/220x100" alt="logo_fivestrars" /></a>
                <div className='estatica'>
                    <ul className={`items ${isOpen && "open"}`}>
                        <li><NavLink to="/" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>HOME</NavLink></li>
                        <li><NavLink to="/quienes-somos" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>¿QUIENES SOMOS?</NavLink></li>
                        <li><NavLink to="/que-hacemos" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>¿QUE HACEMOS?</NavLink></li>
                        <li><NavLink to="/articulos" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>ARTÍCULOS</NavLink></li>
                        <li><NavLink to="/contacto" className={({isActive})=>isActive ? "activo":undefined} onClick={ () => setIsOpen(false)}>CONTACTO</NavLink></li>
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