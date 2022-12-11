import banner from './banner.png'
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner">
            <h1>A galera mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
        </div>
    )
}

export default Banner