import CardData from "./types";

export async function generateCards()
{
    const cards: CardData[] = []

    try 
    {
        for(let i = 1; i < 6; i++)
        {
            const card: CardData = {
                id: 'ksskskk',
                name: 'Cadilac',
                image: 'cadillac 14.jpg'
            } 

            cards.push(card);
        }

        return cards
    }
    catch(error)
    {
        throw new Error('Erro ao criar os cards');
    }
}