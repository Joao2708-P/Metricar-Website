import Card from "./Card";
import CardData from "./types";
import { generateCards } from "./generateCards";
import {useEffect, useState} from 'react'

function Page()
{
    const [cards, setCards] = useState<CardData[]>()

    useEffect(() => {
        async function fetchData() {
            try{
                const generateCard = await generateCards();
                setCards(generateCard);

            }
            catch(error)
            {
                throw new Error('Erro ao criar os cartões!');
            }
        }

        fetchData();
    }, []);

    return(
        <div>
            {cards?.map((card) => (
                <>
                    <Card key={card.id} card={card}/>
                </>
            ))}
        </div>
    )
}

export default Page