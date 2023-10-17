import '../../Styles/CardsFunction/cards.css'
import CardData from './types'

interface CardProps 
{
    card: CardData
}

const Card: React.FC<CardProps> = ({card}) => {
    
    return(
        <a href="#" key={card.id}>
            <div className="cards">
                <img src='cadillac 14.jpg' alt='car'/>
                <button>{card.name}</button>
            </div>
        </a>
    )
}


export default Card