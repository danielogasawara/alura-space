import Icone from "./Icone";
import icones from "./icones.json";
import "./Menu.css";


const Menu = () => {
    return (
        <nav className='menu'>
            <ul className='menu__lista'>
                {icones.map((icone) => {
                    return (
                        <Icone icone={icone} />
                    )
                })}
            </ul>
        </nav>
    )
}

export default Menu