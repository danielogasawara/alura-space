const Icone = ({ icone }) => {
    return (
        <li key={icone.id} className="menu__item">
            <img src={icone.path} alt={icone.alt} />
            <a href="/">{icone.link}</a>
        </li>
    )
}

export default Icone