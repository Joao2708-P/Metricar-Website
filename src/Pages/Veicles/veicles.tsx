import '../../Styles/veicles.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

const Veicles = () => {

    return(
        <div className='bd'>
            <Header/>
            <section className='bg'>
                <div className="filters">
                    <div className='filter'>
                        <label>
                            Cor:
                            <select name="color">
                                <option value="">Todas</option>
                                <option value="blue">Azul</option>
                                <option value="red">Vermelho</option>
                                <option value="black">Preto</option>
                            </select>
                        </label>
                        <label>
                            Ano:
                            <input type="text" name="year"/>
                        </label>
                        <label>
                            Km:
                            <input type="text" name="mileage"/>
                        </label>
                    </div>
                </div>
                <h1 className='title_cars'>Carros Premmium</h1>
                <div className='cards'>
                    {...Array(10).fill(null).map((_, index) => (
                        <div className="card" key={index}>
                            <div className="mold">
                                <img src='/BMW_X3.jpeg' alt='car'/>
                            </div>
                    
                        <div className='content'>
                            <h1 className='description'>BMW X1</h1>
                                <div className='star'>
                                    <p>2024/2023 - 3200km</p>
                                </div>
                                <h3 className='Price'>R$: 322.950,00</h3>
                                <button className='btn'>Compre Agora</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Veicles