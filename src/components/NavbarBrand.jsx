import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarBrand = ({ src }) => {
    return (
        <section className='brand d-flex align-items-center'>
            <Link to='/maria-suculentas' className='text-decoration-none'>
                <a className="navbar-brand d-flex align-items-center gap-1" href="">
                    <img src={src} alt="logo" width="70" height="70" />
                    <p className='fw-bold fs-4 mt-3'>María Suculentas</p>
                </a>
            </Link>
        </section>

    )
}
