import './styles.css';

export default function NavBar() {
    return (
        <nav id="menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/receitas">Receitas</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </nav>
    )
}
