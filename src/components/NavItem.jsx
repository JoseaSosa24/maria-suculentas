import React from 'react'

export const NavItem = ({contenido, href, src}) => {
    return (
        <li className="nav-item d-flex align-items-center m-2">
            <a className="nav-link d-flex align-items-center gap-1 fw-bold fs-5" aria-current="page" href={href}>
            <img src={src} width="50" height="50" />
            {contenido} 
            </a>
        </li>
    )
}
