import axios, {AxiosResponse} from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api/'
});

export interface Cars {
    name: string,
    imagem: string,
    preco: number,
    quilometragem: number,
    ano: number
    condicao: string,
    exterior_color: string,
    interior_color: string,
    disponibilidade: boolean,
    type_slug: string,
    promotion_slug: boolean 
}

export async function GetCar(): Promise<Cars[]>
{
    try
    {
        const response: AxiosResponse<Cars[]> = await api.get('/get-All-cars');
        console.log(response);
        return response.data;
    }
    catch(erro)
    {
        console.log(erro);
        throw new Error('Erro eu puxar os carros');
    }
}