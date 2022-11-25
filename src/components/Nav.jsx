import React from 'react'
import { NavbarBrand } from './NavbarBrand'
import { NavItem } from './NavItem';
// import '../App.css'
// import logo from '../../src/assets/icon/icon-cliente.png' 
export const Nav = () => {
  return (
    <nav class="navbar-expand-lg p-1 d-flex">
        <section class="container-fluid d-flex gap-5">
          <NavbarBrand src={'../../src/assets/icon/logo-planta.png'}/>
          <section class="collapse navbar-collapse d-flex justify-content-center gap-5" id="navbarNav">
            <ul class="navbar-nav d-flex gap-5">
             {/* <NavItem src={'../../src/assets/icon/icon-inicio.png'} href={'#'} contenido={'Inicio'}/> */}
             <NavItem src={'../../src/assets/icon/icon-producto.png'} href={'#'} contenido={'Productos'}/>
             <NavItem src={'../../src/assets/icon/icon-cliente.png'} href={'#'} contenido={'Clientes'}/>
             <NavItem src={'../../src/assets/icon/icon-proovedor.png'} href={'#'} contenido={'Provedores'}/>
            </ul>
          </section>
        </section>
      </nav>
  )
}
