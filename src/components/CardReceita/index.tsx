import "./styles.css"

type Receita = {
    id: string;
    titulo: string;
    imagem: string;
    mensagem: string;
}

export type CardReceitaProps = {
    item: Receita
}

export default function CardReceita({ item }: CardReceitaProps) {
    return (
        <div className="card" key={item.titulo}>
            <img className="image-card" src={item.imagem} alt={item.titulo} />
            <p>{item.mensagem}</p>
            <button className="button">
                <a href={`/receita/${item.id}`}>Ver Receita</a>
            </button>
        </div>
    )
}
