import { Link, NavLink, Outlet } from "react-router-dom"
import './header.css'

export default function NavBar() {
    return <div>
        <div className="header">
        <div>
            <Link className="link" to={"/"}><h2>Logo</h2></Link>
        </div>
        <div>
            <ul>
                <li>
                    <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/user/login">Login</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/user/about">About</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/college">College</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/users">Users</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/users/list">List</NavLink>

                </li>
            </ul>
        </div>
    </div>
    <Outlet/>
    </div>
}