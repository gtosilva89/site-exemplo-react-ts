import CardReceita from '../../components/CardReceita'
import NavBar from '../../components/NavBar'
import './styles.css'

export default function Home() {
    const receitas = [
        {
            id: '1',
            titulo: 'Sopa de Agnoline',
            imagem: '/public/assets/agnoline.webp',
            mensagem: 'Receita de alguma coisa legal que você vai ver depois',
            msg_botao: 'Ver Receita'
        },
        {
            id: '2',
            titulo: 'Bolinho de chuva',
            imagem: '/public/assets/bolinho-de-chuva.jpg',
            mensagem: 'Receita de alguma coisa legal que você vai ver depois',
            msg_botao: 'Ver Receita'
        },
        {
            id: '3',
            titulo: 'Bolinho de Arroz',
            imagem: '/public/assets/bolinho-de-arroz.jpeg',
            mensagem: 'Receita de alguma coisa legal que você vai ver depois',
            msg_botao: 'Ver Receita'
        },
        {
            id: '4',
            titulo: 'Tortei',
            imagem: '/public/assets/tortei.jpg',
            mensagem: 'Receita de alguma coisa legal que você vai ver depois',
            msg_botao: 'Ver Receita'
        },
    ]

    return (
        <>
            <NavBar />
            <div id="content">
                {receitas.map((item) => (
                    <CardReceita item={item} />
                ))}
            </div>
        </>
    )
}

