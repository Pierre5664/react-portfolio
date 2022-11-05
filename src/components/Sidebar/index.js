import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoPierre from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoPierre} alt="logo" />           
        </Link>
        <nav>
            <NavLink exact="true" activeClassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://linkedin.com/in/pierre-degail"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#2a6496" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Pierre5664"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/pierredegail/"
                >
                    <FontAwesomeIcon icon={faInstagram} color="#b200ff" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://soundcloud.com/hanuman56"
                >
                    <FontAwesomeIcon icon={faSoundcloud} color="#ee6f26" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar