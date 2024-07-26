import '../Styles/Header.css';
import { Link } from 'react-router-dom';
import { Car, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Header() {
    const [isToggle, setToggle] = useState(false);

    const setMenuToggle = () => {
        setToggle(!isToggle);
    };

    return (
        <header>
            <nav className="bar">
                <div className='responsiveMenu' onClick={setMenuToggle}>
                    {isToggle ? <X /> : <Menu />}
                </div>
                <h1>Metri<span>Car</span></h1>
                <ul className={`navBar ${isToggle ? 'active' : ''}`}>
                    <li><Link to="/" onClick={setMenuToggle}>Início</Link></li>
                    <li><Link to="/cars-pradon" onClick={setMenuToggle}>Carros Comuns</Link></li>
                    <li><Link to="/cars-lux" onClick={setMenuToggle}>Carros Premium</Link></li>
                    <li><Link to="/cars-suvs" onClick={setMenuToggle}>SUVs</Link></li>
                </ul>
                <div className="search">
                    <input className="pesquisa" type='text' placeholder='Pesquisar...' />
                    <img src="/Search.png" alt="iconSearch" />
                    <div className="line"></div>
                </div>   
                <div className="shop-user">
                    <Car className='bag' />
                    <User />
                </div>
            </nav>
        </header>
    );
}

export default Header;
