import './Populares.css';
import fotosPopulares from './fotos-populares.json';
import Botao from '../Botao';

const Populares = () => {
    return (
        <aside className='populares'>
            <h2>Populares</h2>
            <ul className='populares__imagens'>
                {fotosPopulares.map((fotoPopular) => {
                    return (
                        <li key={fotoPopular.id}>
                            <img src={fotoPopular.path} alt={fotoPopular.alt} />
                        </li>
                    )
                })}
            </ul>
            <Botao>Ver mais fotos</Botao>
        </aside>
    )
}

export default Populares