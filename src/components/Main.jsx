import { Button } from './Button'
import React from 'react'
import { FormItem } from './FormItem'
import { FormSelect } from './FormSelect'
import { Titulo } from './Titulo'


export const Main = () => {
  return (
    <main className='principal d-flex flex-column gap-3'>
      <section className='contenedor-formulario bg-info d-flex flex-column p-4 align-items-center justify-content-center'>
        <form class="row g-3 d-flex p-3 col-11 justify-content-between">
          <Titulo titulo={'Registro Producto'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Nombre'} id={'validationDefault01'} placeholder={'Pasionaria'} type={'text'} />
          <FormSelect clase={'form-item col-2'} id={'validationDefault02'} textoLabel={'Sexo'} opcion={{
            uno:'Macho',
            dos: 'Hembra'
          }} />
          <FormItem clase={'form-item col-md-2'} textoLabel={'Referencia'} id={'validationDefault03'} placeholder={'Referencia'} type={'text'} />
          <FormItem clase={'form-item col-md-2'} textoLabel={'Tamaño'} id={'validationDefault04'} placeholder={'10cm'} type={'number'} />
          <FormItem clase={'form-item col-md-2'} textoLabel={'Cantidad'} id={'validationDefault05'} placeholder={'4'} type={'number'} />
          <section class="form-item col-md-12">
            <label for="validationDefault05" class="form-label">Descripción</label>
            <textarea class="form-control" id="validationDefault06" placeholder="Es una planta que..." rows="4" required />
          </section>
          <Button clase={'form-button d-flex justify-content-center col-12'} classButton={'btn btn-primary'} textButton={'Enviar'} type={'submit'}/>
          
        </form>
      </section>
      
      <section className='contenedor-formulario bg-info d-flex flex-column p-4 gap-3 align-items-center justify-content-center'>
        <form class="row g-3 d-flex p-3 col-11 justify-content-between">
          <Titulo titulo={'Registro Clientes'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Nombre'} id={'validationDefault01'} placeholder={'Pasionaria'} type={'text'} />
          <FormSelect clase={'form-item col-2'} id={'validationDefault02'} textoLabel={'Sexo'} opcion={{
            uno:'Macho',
            dos: 'Hembra'
          }} />
          <FormItem clase={'form-item col-md-2'} textoLabel={'Referencia'} id={'validationDefault03'} placeholder={'Referencia'} type={'text'} />
          <FormItem clase={'form-item col-md-2'} textoLabel={'Tamaño'} id={'validationDefault04'} placeholder={'10cm'} type={'number'} />
          <FormItem clase={'form-item col-md-2'} textoLabel={'Cantidad'} id={'validationDefault05'} placeholder={'4'} type={'number'} />
          <section class="form-item col-md-12">
            <label for="validationDefault05" class="form-label">Descripción</label>
            <textarea class="form-control" id="validationDefault06" placeholder="Es una planta que..." rows="4" required />
          </section>
          <Button clase={'form-button d-flex justify-content-center col-12'} classButton={'btn btn-primary'} textButton={'Enviar'} type={'submit'}/>
        </form>
      </section>
    </main>
  )
}
