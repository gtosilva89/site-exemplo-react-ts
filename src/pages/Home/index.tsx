import NavBar from '../../components/NavBar'
import './styles.css'
import image from "../../assets/bolinho-de-chuva.jpg"



export default function Home() {
    const items = [
        {
            titulo: 'Sopa de Agnoline',
            imagem: '../../assets/agnoline.webp',
            mensagem: 'Receita de alguma coisa legal que você vai ver depois',
            msg_botao: 'Ver Receita'
        },
        {
            titulo: 'Bolinho de chuva',
            imagem: '../../assets/bolinho-de-chuva.jpg',
            mensagem: 'Receita de alguma coisa legal que você vai ver depois',
            msg_botao: 'Ver Receita'
        },
        {
            titulo: 'Sopa de Agnoline',
            imagem: '../../assets/agnoline.webp',
            mensagem: 'Receita de alguma coisa legal que você vai ver depois',
            msg_botao: 'Ver Receita'
        },
        {
            titulo: 'Bolinho de chuva',
            imagem: '../../assets/bolinho-de-chuva.jpg',
            mensagem: 'Receita de alguma coisa legal que você vai ver depois',
            msg_botao: 'Ver Receita'
        }
    ]


    return (
        <div id="container">
            <NavBar />
            <div id="content">
                {items.map((item) => (
                    <div className="card" key={item.titulo}>
                        <img src={image} alt={item.titulo} />
                        <p>{item.mensagem}</p>
                        <button className="button">{item.msg_botao}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

