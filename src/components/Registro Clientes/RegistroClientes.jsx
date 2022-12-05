import React from 'react'
import { FormItem } from '../FormItem';
import { Titulo } from '../Titulo';
import { Button } from '../Button';
export const RegistroClientes = () => {
  return (
    <section id='formulario-clientes' className='formulario-clientes contenedor-formulario d-flex flex-column gap-3 align-items-center justify-content-center w-75'>
        <form class="row g-3 d-flex col-12 justify-content-between">
          <Titulo titulo={'Registro Clientes'} className={'mb-2'}/>
          <FormItem clase={'form-item col-md-4 mb-5'} textoLabel={'Nombre'} id={'validationDefault01'} placeholder={'Juan Perez'} type={'text'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Documento'} id={'validationDefault02'} placeholder={'102456501'} type={'number'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Correo'} id={'validationDefault03'} placeholder={'juanperez@gmail.com'} type={'email'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Dirección'} id={'validationDefault04'} placeholder={'cra 80B #25'} type={'text'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Barrio'} id={'validationDefault05'} placeholder={'Robledo'} type={'text'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Teléfono'} id={'validationDefault06'} placeholder={'3216452322'} type={'number'} />
          <Button clase={'form-button d-flex justify-content-center col-12'} classButton={'btn btn-primary col-3'} textButton={'Enviar'} type={'submit'} />
        </form>
      </section>
  )
}
