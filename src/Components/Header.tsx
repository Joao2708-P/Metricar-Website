import '../Styles/Header.css'
import { useEffect} from 'react';
import {ShoppingBagIcon, User} from 'lucide-react'

function Header()
{
    useEffect(() => {
        const links = document.querySelectorAll("header nav ul li a");
    
        links.forEach(link => {
          link.addEventListener("click", (event) => {
            event.preventDefault();
    
            const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute("href")?.substring(1);
            const targetSection = document.getElementById(targetId || " ");
            if (targetSection) {
              const targetOffset = targetSection.offsetTop;
    
  
              window.scrollTo({
                top: targetOffset,
                behavior: "smooth"
              });
            }
          });
        });
      }, []); // Certifique-se de que esteja vazio para que o efeito seja executado apenas uma vez

    return(
        <header>
          <nav className="bar">
                <h1>Metri<span>Car</span></h1>
                <ul className="navBar">
                    <li><a href="#Inicio">Incio</a></li>
                    <li><a href="#About">Sobre</a></li>
                    <li><a href="#standard-cars-pradon">Carros Padrão</a></li>
                    <li><a href="#standard-cars-lux">Carros de Luxo</a></li>
                    <li><a href="#standard-cars-suvs">SUVs</a></li>
                    <li><a href="#Location">Location</a></li>
                </ul>
                <div className="search">
                    <input className="pesquisa" type='text' placeholder='Pesquisar...'/>
                    <img src="/Search.png" alt="iconSearch" />
                    <div className="line"></div>
                </div>
                <div className="shop-user">
                    <ShoppingBagIcon  className='bag'/>
                    <User/>
                </div>
            </nav>
        </header>
    )    
}

export default Header