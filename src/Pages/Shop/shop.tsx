import './shop.css'
import { ChangeEvent, useState } from 'react';
import Headers from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Shop = () => {

    const [phone, setPhone] = useState<string>('');

    const formatPhoneNumber = (value: string): string => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 3) return phoneNumber;
        if (phoneNumberLength < 8) {
            return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
        }
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhone(formattedPhoneNumber);
    };


    return (
        <div className='body'>
            <Headers/>
            <div className='container'>
                <div className='image-car'>
                    <img src="/BMW_X3.jpeg" alt="BMW" />
                </div>

                <div className='car-payment-informations'>
                    <div className='details-car'>
                        <div className='intial-informations'>
                            <h1>BMW <span>X3</span></h1>
                            <p>Modelo: 1.0</p>
                        </div>
                        <div className='car-details'>
                            <p><strong>Ano: </strong> 2024/2023</p>
                            <p><strong>Condição: </strong> novo</p>
                            <p><strong>Cor exterior:</strong> Azul</p>
                            <p><strong>Cor interior:</strong> Preto</p>
                            <p><strong>Câmbio:</strong> Automático</p>
                            <p><strong>Motor:</strong> 2.0 Turbo</p>
                            <p><strong>Consumo médio:</strong> 12 km/l</p>
                            <p><strong>Combustível:</strong> Gasolina/Eletrico</p>
                        </div>
                        <hr />
                        <p className='car-description'>
                            O BMW X3 é um SUV compacto de luxo que 
                            combina elegância e desempenho com tecnologia 
                            de ponta. Equipado com um motor 2.0 Turbo, oferece 
                            uma condução potente e eficiente, com um consumo médio 
                            de 12 km/l. Seu interior em preto, combinado com a cor 
                            exterior azul, proporciona um visual sofisticado e moderno. 
                            O câmbio automático garante uma experiência de condução suave 
                            e confortável, ideal para qualquer tipo de estrada.<br/> <br />
                            Além de seu desempenho, o BMW X3 é conhecido por sua ampla gama 
                            de recursos de segurança e assistência ao motorista, incluindo 
                            controle de cruzeiro adaptativo, aviso de colisão frontal e sistema 
                            de manutenção de faixa. Seu interior espaçoso e luxuoso oferece conforto 
                            superior para todos os passageiros, com acabamento de alta qualidade e 
                            tecnologia de entretenimento avançada.
                            Seja para viagens longas ou para o dia a dia na cidade, o BMW X3 é o companheiro 
                            perfeito, combinando versatilidade, estilo e inovação em um único veículo.
                        </p>
                    </div>

                    <div className='price-payment'>
                        <div className='descount'>
                            <h1>R$: 322.950,00</h1>
                            <h2>0%</h2>
                        </div>
                        <p>Preço original</p>
                        <div className='complete-register'>
                            <input type="text" placeholder='Nome'/>
                            <input type="text" placeholder='Email' />
                            <input type="text" id="phone" placeholder='Telefone' name="phone" value={phone}onChange={handleChange} />
                            <div className='btns'>
                                <button className='btn'>Cadastrar</button>
                                <button className='btn'>Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Shop