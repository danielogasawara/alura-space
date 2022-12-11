import Banner from "../../componentes/Banner"
import Cabecalho from "../../componentes/Cabecalho"
import Galeria from "../../componentes/Galeria"
import Menu from "../../componentes/Menu"
import Populares from "../../componentes/Populares"
import Rodape from "../../componentes/Rodape"
import './PaginaInicial.css'

const PaginaInicial = () => {
    return (
        <>
            <Cabecalho />
            <main>
                <section className="principal">
                    <Menu />
                    <Banner />
                </section>
                <div className="galeria-container">
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}

export default PaginaInicial