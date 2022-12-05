import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const NavItem = ({ contenido, href, src, to }) => {
    return (
        <li className="nav-item d-flex align-items-center m-2">
            <Link to={to} className='text-decoration-none nav-link d-flex align-items-center gap-1 fw-bold fs-5' hrefLang={href}>
                <img src={src} width="50" height="50" />
                {contenido}
            </Link>
            <Outlet />
        </li>

    )
}
