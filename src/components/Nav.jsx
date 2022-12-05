import React from 'react'
import { NavbarBrand } from './NavbarBrand'
import { NavItem } from './NavItem';
// import '../App.css'
import logo from '../../src/assets/icon/logo-planta.png';
import ImagenesMenu from '../assets/ImagenesMenu';
import { Outlet } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg p-2 d-flex">
      <section className="container-fluid d-flex">
        <NavbarBrand src={logo} />
        <section className="collapse navbar-collapse d-flex justify-content-center gap-5" id="navbarNav">
          <ul className="navbar-nav d-flex gap-5">
            {/* <NavItem src={'../../src/assets/icon/icon-inicio.png'} href={'#'} contenido={'Inicio'}/> */}
            <NavItem src={ImagenesMenu.productos} href={'#formulario-productos'} contenido={'Productos'} to='/maria-suculentas/RegistroProductos'/>
            <NavItem src={ImagenesMenu.cliente}  contenido={'Clientes'} to='/maria-suculentas/RegistroClientes' />
            <NavItem src={ImagenesMenu.proveedor}  contenido={'Provedores'} to='/maria-suculentas/RegistroProvedores' />
          </ul>
        </section>
      </section>
      {/* <Outlet/> */}
    </nav>
   
  )
}
