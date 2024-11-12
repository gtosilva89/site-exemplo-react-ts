import { useParams } from "react-router-dom"
import NavBar from "../../components/NavBar"
import './styles.css'

type Ingrediente = {
    id?: string;
    nome?: string;
    quantidade?: string;
}

type Receita = {
    id: string;
    titulo: string;
    imagem: string;
    mensagem: string;
    ingredientes: Ingrediente[];
}


export default function Receita() {
    const receitas = [
        {
            id: '1',
            titulo: 'Sopa de Agnoline',
            imagem: '/public/assets/agnoline.webp',
            mensagem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem obcaecati similique magnam nostrum officia, placeat deleniti nisi suscipit enim cumque eos quam optio sint nulla, omnis saepe error libero!',
            ingredientes: [
                {
                    id: '1',
                    nome: 'Agnoline',
                    quantidade: '1kg'
                },
                {
                    id: '2',
                    nome: "Cebola",
                    quantidade: '200g'
                },
                {
                    id: '3',
                    nome: 'Alho',
                    quantidade: '1 unidade'
                },
                {
                    id: '4',
                    nome: 'Tomate',
                    quantidade: '1 unidade',
                },
                {
                    id: '5',
                    nome: 'Frango',
                    quantidade: '600g',
                }
            ]
        },
        {
            id: '2',
            titulo: 'Bolinho de chuva',
            imagem: '/public/assets/bolinho-de-chuva.jpg',
            mensagem: 'Receita de alguma coisa legal que você vai ver depois',
            ingredientes: [
                {
                    id: '1',
                    nome: 'Farinha',
                    quantidade: '500g'
                },
                {
                    id: '2',
                    nome: 'Ovo',
                    quantidade: '3 unidades'
                },
                {
                    id: '3',
                    nome: 'Leite',
                    quantidade: '200ml'
                },
                {
                    id: '4',
                    nome: 'Manteiga',
                    quantidade: '100g'
                },

            ]
        },
        {
            id: '3',
            titulo: 'Bolinho de Arroz',
            imagem: '/public/assets/bolinho-de-arroz.jpeg',
            mensagem: 'Receita de alguma coisa legal que você vai ver depois',
            ingredientes: []
        },
        {
            id: '4',
            titulo: 'Tortei',
            imagem: '/public/assets/tortei.jpg',
            mensagem: 'Receita de alguma coisa legal que você vai ver depois',
            ingredientes: []
        },

    ]

    const { id } = useParams()

    const item = receitas.find(item => item.id === id)

    return (
        <>
            <NavBar />
            <div id="content">
                {item &&
                    <div id="receita">
                        <h2 id="title">{item.titulo}</h2>
                        <div id="details">
                            <img src={item.imagem} alt={item.titulo} />
                            <p>{item.mensagem}</p>
                        </div>
                        <div id="instructions">
                            <div id="ingredients">
                                <h3>Ingredientes</h3>
                                <ul >
                                    {item.ingredientes.map(ingrediente => (
                                        <li key={ingrediente.id}>
                                            {ingrediente.quantidade} {ingrediente.nome}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div id="preparation">
                                <h3>Preparo</h3>
                                <ul>
                                    <li>Passo 1</li>
                                    <li>Passo 2</li>
                                    <li>Passo 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
                {!item && <h2>Receita nao encontrada</h2>}
            </div>
        </>
    )
}
