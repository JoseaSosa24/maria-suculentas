import React from 'react'

export const NavItem = ({contenido, href, src}) => {
    return (
        <li class="nav-item d-flex align-items-center m-2">
            <a class="nav-link d-flex align-items-center gap-1" aria-current="page" href={href}>
            <img src={src} width="50" height="50" />
            {contenido} 
            </a>
        </li>
    )
}
