import Card from "./Card";

const Cards = ({ fotos }) => {
    return (
        <ul className='galeria__cards'>
            {fotos.map((foto) => {
                return (
                    <Card foto={foto} />
                )
            })}
        </ul>
    )
}

export default Cards