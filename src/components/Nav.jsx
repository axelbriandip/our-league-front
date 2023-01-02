import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="nav">
            <div className="logos">
                <i className="fas fa-shield"></i>
                <div className="logo-cli">Liga Independiente</div>
            </div>
            <ul>
                <li><Link to={'/listings'}>Listas de buena fe</Link></li>
                <li><Link to={'#'}>Item 2</Link></li>
                <li><Link to={'#'}>Item 3</Link></li>
            </ul>
        </div>
    );
};

export default Nav;