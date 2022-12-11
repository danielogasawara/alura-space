import open from "./open.png";
import favorito from "./favorito.png";

const Card = ({ foto }) => {
    return (
        <li key={foto.id} className="galeria__card">
            <img
                className='galeria__imagem'
                src={foto.imagem}
                alt={foto.titulo}
            />
            <p className='galeria__descricao'>{foto.titulo}</p>
            <div>
                <p>{foto.creditos}</p>
                <span>
                    <img src={favorito} alt="Icone de curtir" />
                    <img src={open} alt="Icone de abrir modal" />
                </span>
            </div>
        </li>
    )
}

export default Card