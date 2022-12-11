import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <ul className='rodape__redes-sociais'>
                <li>
                    <a href="https://facebook.com">
                        <img src={facebook} alt="Logomarca do facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com">
                        <img src={twitter} alt="Logomarca do twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com">
                        <img src={instagram} alt="Logomarca do instagram" />
                    </a>
                </li>
            </ul>
            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Rodape