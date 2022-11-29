import React from 'react'
import { NavbarBrand } from './NavbarBrand'
import { NavItem } from './NavItem';
// import '../App.css'
import logo from '../../src/assets/icon/logo-planta.png' 
export const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg p-2 d-flex">
      <section class="container-fluid d-flex">
        <NavbarBrand src={logo} />
        <section class="collapse navbar-collapse d-flex justify-content-center gap-5" id="navbarNav">
          <ul class="navbar-nav d-flex gap-5">
            {/* <NavItem src={'../../src/assets/icon/icon-inicio.png'} href={'#'} contenido={'Inicio'}/> */}
            <NavItem src={'../src/assets/icon/icon-producto.png'} href={'#formulario-productos'} contenido={'Productos'} />
            <NavItem src={'../src/assets/icon/icon-cliente.png'} href={'#formulario-clientes'} contenido={'Clientes'} />
            <NavItem src={'../src/assets/icon/icon-proovedor.png'} href={'#formulario-proveedor'} contenido={'Provedores'} />
          </ul>
        </section>
      </section>
    </nav>
  )
}
