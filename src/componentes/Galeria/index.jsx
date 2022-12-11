import './Galeria.css';
import fotos from "./fotos.json";
import Tags from "../Tags";
import Cards from './Cards';
import { useState } from 'react';


const Galeria = () => {
    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map((valor) => valor.tag))];

    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag;
        })

        setItens(novasFotos);
    }
    return (
        <section className='galeria'>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
            <Cards fotos={itens} />
        </section>
    )
}

export default Galeria