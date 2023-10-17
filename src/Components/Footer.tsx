 import '../Styles/Footer.css'
 import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

 function Footer()
 {
    return(
       <section className="footer">
            <div className="footer-container container">
                <div className="footer-box">
                    <h2 className="logo">Metri<span>Car</span></h2>
                    <div className="redes">
                        <a href="#"><Instagram className='bx bxl-Instagram'/></a>
                        <a href="#"><Twitter   className='bx bxl-Twitter'/></a>
                        <a href="#"><Facebook  className='bx bxl-Facebook'/></a>
                        <a href="#"><Youtube   className='bx bxl-Youtube'/></a>
                    </div>
                </div>
                <div className="footer-box">
                    <h3>Sobre</h3>
                    <a href="#">Sobre os Criadores</a>
                    <a href="#">Sobre a Página</a>
                    <a href="#">Blog</a>
                </div>
                <div className="footer-box">
                    <h3>Filais</h3>
                    <a href="#">Estados Unidos</a>
                    <a href="#">Coreia</a>
                    <a href="#">Alemanha</a>
                    <a href="#">França</a>
                </div>
                <div className="footer-box">
                    <div className="Textera">
                        <h3>Contate-nos</h3>
                        <textarea className="text" placeholder='Digite sua mensagem...'></textarea>
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
       </section>
    )
 }

 export default Footer