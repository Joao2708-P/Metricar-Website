import '../Styles/Content.css';
import { Cars, GetCar } from '../Api/api';
import { useEffect, useState } from 'react';
import currency from 'currency.js'

function Content() {
  const [currentCarList, setCarsList] = useState(0);
  const [carList, setCarList] = useState<Cars[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const cars = await GetCar();
      setCarList(cars);
    };

    fetchCars();
  }, []);

  useEffect(() => {
    const nextSlider = () => {
      setCarsList((prev) => (prev === carList.length - 1 ? 0 : prev + 1));
    };

    const slideInterval = setInterval(nextSlider, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [carList]);

  const currentCar = carList[currentCarList] || {};
  const precoString = typeof currentCar.preco === 'number' ? currentCar.preco.toString() : currentCar.preco || '0';
  const convertVal = parseFloat(parseFloat(precoString).toFixed(2));
  const format_price = currency(convertVal, { symbol: 'R$', separator: ',', decimal: '.'}).format(); 

  return (
    <>
      <main>
        <div className="Conteudo" id="Inicio">
          <div className="captura">
            <div className="content-cars">
              {carList.length > 0 && (
                <>
                  <strong> <h1>{currentCar.name}</h1></strong>
                  <div className="informations">
                    <h2>Infomações do Carro</h2>
                    <p><strong>- Preço do Carro: {format_price}</strong></p>
                    <p><strong>- Quilometragem: </strong> {currentCar.quilometragem} Km</p>
                    <p><strong>- Ano: </strong>{currentCar.ano}</p>
                    <p><strong>- Vehicle Condition: </strong>{currentCar.condicao}</p>
                    <p><strong>- Exterior Color: </strong>{currentCar.exterior_color}</p>
                    <p><strong>- Interior Color: </strong>{currentCar.interior_color}</p>
                    <button className="btn btn-primary" type="submit">Compre Agora</button>
                  </div>
                  <div className="Redome">
                    <img
                      crossOrigin='anonymous'
                      src={`http://localhost:3000/${currentCar.imagem}`} // Certifique-se de que esta URL corresponde à URL servida pelo Express
                      alt={currentCar.name}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div ></div>
        <section className="about" id="About">
          <div className="content-about">
            <h1>Sobre a <span className='metri'>Metri</span><span>Car</span></h1>
            <div className="corp-about">
              <div className="text-button">
                <p>
                  Nossa missão na MetriCar é proporcionar um serviço de qualidade e comodidade excepcionais aos nossos clientes. 
                  Somos uma empresa de aluguel de carros comprometida em atender às necessidades de mobilidade de nossos clientes 
                  de maneira eficiente e conveniente. Buscamos constantemente elevar o padrão do setor automotivo, oferecendo uma 
                  experiência de aluguel de carros que seja não apenas conveniente, mas também segura e confiável.
                  Nosso compromisso com a qualidade se reflete em nossa frota de veículos bem mantidos, que abrange uma variedade 
                  de opções para atender a diversas necessidades de transporte. Seja para viagens de lazer, negócios ou situações 
                  especiais, a MetriCar tem o veículo certo para você.
                  Além disso, entendemos a importância da comodidade para nossos clientes. Nossos processos de aluguel são simplificados 
                  e fáceis de usar, tornando o processo de reserva e retirada de veículos o mais conveniente possível. Estamos empenhados 
                  em oferecer um atendimento ao cliente excepcional, garantindo que cada interação com a MetriCar seja uma experiência 
                  positiva.
                  Acreditamos que a mobilidade é essencial no mundo de hoje, e a MetriCar está aqui para tornar a locomoção mais acessível e 
                  sem complicações. Agradecemos a confiança que nossos clientes depositam em nós e continuaremos trabalhando incansavelmente 
                  para cumprir nossa missão de fornecer qualidade e comodidade em cada viagem.
                </p>
                <button>Saiba Mais</button>
              </div>
              <div className='About-image'>
                <img src="/Ferrari.jpg" alt="Ferrari" />
              </div>
            </div>
          </div>
        </section>
        {/*-----------------*/}

        {/*Carros de passeio*/}  
        <div id="standard-cars-pradon"></div>
          <section className='cars-padron'>
            <div className='tittles'>
              <h4>Nossos Carros</h4>
              <h1>Para Passear com a <span>Família</span></h1>
              <p>Explore nossa frota de carros projetados para passeios em família. 
                Escolha o veículo perfeito para tornar sua viagem especial. Tornamos o aluguel de carros 
                simples e conveniente.</p>
              </div>

              <div className="content-cars-padron">
                  <div className="cards">
                    <img src='/Fiat-Argo.jpg' alt='car'/>
                    <button>Fiat Argo</button>
                  </div>
                  <div className="cards">
                    <img src='/tcross__.jpg' alt='car'/>
                    <button>Volkswagen T-Cross Sense</button>
                  </div>
                  <div className="cards">
                    <img src='/C4-Citroen.jpg' alt='car'/>
                    <button>Citroen C4</button>
                </div>
                <div className="cards">
                    <img src='/chevrolet-cruze.jpg' alt='car'/>
                    <button>Chevrolet Cruze</button>
                </div>
                <div className="cards">
                    <img src='/kwid-renault.jpg' alt='car'/>
                    <button>Kwid</button>
                </div>
                <div className="cards">
                    <img src='/Ford-Ka.jpg' alt='car'/>
                    <button>Ford Ka</button>
                </div>
              </div>
              <button className='viem'>Ver mais</button>
          </section>
        {/*---------------*/}


        {/*Carros de Luxo*/}
        <div id="standard-cars-lux"></div>
          <section className='cars-padron'>
            <div className='tittles'>
              <h4>Nossos Carros Esportivos</h4>
              <h1>Experimente a Emoção da Alta <span>Performance</span></h1>
              <p>Descubra nossa seleção de carros esportivos projetados para 
                entusiastas que buscam adrenalina. Escolha o veículo perfeito 
                para elevar sua experiência de condução a um novo patamar. Facilitamos 
                o aluguel de carros esportivos, tornando cada viagem uma aventura inesquecível.</p>
            </div>

              <div className="content-cars-padron">
                <div className="cards">
                   <img src='/BMW_X3.jpeg' alt='car'/>
                   <button>BMW X3</button>
                </div>
                <div className="cards">
                   <img src='/BMWx1.jpg' alt='car'/>
                   <button>BMW X1</button>
                </div>
                <div className="cards">
                   <img src='/land-rover_discovery[.jpg' alt='car'/>
                   <button>Land rover</button>
                </div>
                <div className="cards">
                    <img src='/porschMacan.jpeg' alt='car'/>
                    <button>Porschr</button>
                </div>
                <div className="cards">
                    <img src='/Volvo_xc4.jpg' alt='car'/>
                    <button>Volvo</button>
                </div>
                <div className="cards">
                    <img src='/rolls_royce_sweptail.jpg' alt='car'/>
                    <button>Rolls Royce</button>
                </div>
              </div>

              <button className='viem'>Ver mais</button>
          </section>
        {/*---------------*/}

        {/*Carros de SUVs*/}
        <div id="standard-cars-suvs"></div>
          <section className='cars-padron'>
            <div className='tittles'>
              <h4>Nossas SUVs</h4>
              <h1>Robustas para Viagens <span>Aventurosas</span></h1>
              <p>Explore nossa frota de SUVs projetados para viagens que 
                desafiam os limites. Escolha o veículo perfeito para tornar 
                sua aventura ainda mais emocionante. Tornamos o aluguel de SUVs 
                simples e conveniente, garantindo que sua jornada seja excepcional.</p>
            </div>
              <div className="content-cars-padron">
                <div className="cards">
                   <img src='/Jeep-renegate.jpg' alt='car'/>
                   <button>Renegate</button>
                </div>
                <div className="cards">
                   <img src='/Hyundai-creta.jpg' alt='car'/>
                   <button>Hyundai Creta</button>
                </div>
                <div className="cards">
                   <img src='/Tiggo_5x.jpg' alt='car'/>
                   <button>Tiggo 5x</button>
                </div>
                <div className="cards">
                    <img src='/Nissan-Kicks.jpg' alt='car'/>
                    <button>Nissan Kicks</button>
                </div>
                <div className="cards">
                    <img src='/Peugeot-Allure.jpg' alt='car'/>
                    <button>Peugeot Allure</button>
                </div>
                <div className="cards">
                    <img src='/Fiat-Pulse.jpg' alt='car'/>
                    <button>Fiat Pulse</button>
                </div>
              </div>
              <button className='viem'>Ver mais</button>
          </section>
        {/*---------------*/}

        {/*Localização da consecionária*/}
        <div className='map' id="Location">
        <h2>Nossa Localização!</h2> 
          <div className='quadro'>
            <div className=' content-img'>
                <img src="MapLocation.png" alt="localização" />
            </div>
            <div className='content-location'>
                <p>Estamos convenientemente localizados no centro da cidade, na Av. das Amoreiras, 398. 
                  Nossa localização privilegiada permite fácil acesso a partir de qualquer lugar da cidade. 
                  Portanto, não importa onde você esteja, estamos prontos para atendê-lo. Dê uma olhada no mapa 
                  abaixo para ver nossa localização exata</p>
            </div>
          </div>
        </div>
        {/*---------------*/}
      </main>
    </>
  )
}

export default Content