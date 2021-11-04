import {NavLink} from 'react-router-dom'
import useAuth from '../../auth/useAuth'

export default function NavigationBar() {
    const auth = useAuth();
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/" activeClassName="activeLink"> Home</NavLink></li>
                <li><NavLink to="/login" activeClassName="activeLink"> Login </NavLink></li>
                {auth.isLogged() && (
                    
                    <li><a onClick={auth.logout} activeClassName="activeLink"> Logout </a></li>
                )}
            </ul>
        </nav>
    )
}
