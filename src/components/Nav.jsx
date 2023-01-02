import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="nav">
            <div className="logos">
                <div className="logo-ol">Our League</div>
                <div className="logo-cli">Liga Independiente</div>
            </div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/listings'}>Listings</Link></li>
            </ul>
        </div>
    );
};

export default Nav;