import React from 'react'
import { Article } from './Article'
import { Galeria } from './Galeria'
import { RegistroClientes } from '../components/Registro Clientes/RegistroClientes';
import { RegistroProveedor } from '../components/Registro Proveedores/RegistroProveedor';
import { RegistroProductos } from '../components/Registro Productos/RegistroProductos';
import { Routes, Route } from 'react-router-dom';


export const Main = () => {
  return (

    <main className='principal d-flex flex-column gap-3 '>
      <Routes>
        <Route path='/maria-suculentas/' element={<Article />} />
        <Route path='/maria-suculentas/RegistroProductos' element={<RegistroProductos />} />
        <Route path='/maria-suculentas/RegistroClientes' element={<RegistroClientes />} />
        <Route path='/maria-suculentas/RegistroProvedores' element={<RegistroProveedor />} />
      </Routes>


    </main>

  )
}
