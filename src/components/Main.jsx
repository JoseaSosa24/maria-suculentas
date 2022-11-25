import { Button } from './Button'
import React from 'react'
import { FormItem } from './FormItem'
import { FormSelect } from './FormSelect'
import { Titulo } from './Titulo'
import { FormTextArea } from './FormTextArea'
import { Carousel } from './Carousel'



export const Main = () => {
  return (
    <main className='principal d-flex flex-column gap-3'>
      <article className=''>
        <section class="card text-bg-dark">
          <img src="https://www.royalqueenseeds.es/modules/prestablog/themes/royalqueenseeds/up-img/74.jpg" class="card-img5" height="600px"  alt="..." />
          <section class="card-img-overlay mt-5 ">
            <h1 class="card-title fw-bold bg-black bg-opacity-25 rounded">¿Qué es la marihuana medicinal y cómo elegir una variedad de marihuana medicinal?</h1>
            <p class="card-text fs-5 fw-bold bg-black bg-opacity-25 rounded"> La marihuana medicinal es aquella que se utiliza para tratar o aliviar una afección, más que para fines recreativos o espirituales. Cualquier tipo de marihuana que contenga una cantidad efectiva de cannabinoides puede
              ser considerada marihuana medicinal si se utiliza para tal fin.</p>
            <p className='bg-black bg-opacity-25 rounded'> Por Sensi Seeds
              Actualizado el 08/17/2021
              Revisión médica realizada por Sanjai Sinha, MD</p>
          </section>
        </section>
      </article>

      {/* <Carousel /> */}

      <section id="formulario-productos" className='formulario-productos contenedor-formulario bg-info d-flex flex-column p-4 align-items-center justify-content-center'>
        <form class="row g-3 d-flex p-3 col-11 justify-content-between">
          <Titulo titulo={'Registro Producto'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Nombre'} id={'validationDefault01'} placeholder={'Pasionaria'} type={'text'} />
          <FormSelect clase={'form-item col-2'} id={'validationDefault02'} textoLabel={'Sexo'} opcion={{
            uno: 'Macho',
            dos: 'Hembra'
          }} />
          <FormItem clase={'form-item col-md-2'} textoLabel={'Referencia'} id={'validationDefault03'} placeholder={'Referencia'} type={'text'} />
          <FormItem clase={'form-item col-md-2'} textoLabel={'Tamaño'} id={'validationDefault04'} placeholder={'10cm'} type={'number'} />
          <FormItem clase={'form-item col-md-2'} textoLabel={'Cantidad'} id={'validationDefault05'} placeholder={'4'} type={'number'} />
          <FormTextArea clase={'form-item col-md-12'} id={'validationDefault06'} textLabel={'Descripción'} placeholder={'Es una planta que...'} />
          <Button clase={'form-button d-flex justify-content-center col-12'} classButton={'btn btn-primary'} textButton={'Enviar'} type={'submit'} />

        </form>
      </section>

      <section id='formulario-clientes' className='formulario-clientes contenedor-formulario bg-info d-flex flex-column p-4 gap-3 align-items-center justify-content-center'>
        <form class="row g-3 d-flex p-3 col-11 justify-content-between">
          <Titulo titulo={'Registro Clientes'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Nombre'} id={'validationDefault01'} placeholder={'Juan Perez'} type={'text'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Documento'} id={'validationDefault02'} placeholder={'102456501'} type={'number'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Correo'} id={'validationDefault03'} placeholder={'juanperez@gmail.com'} type={'email'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Dirección'} id={'validationDefault04'} placeholder={'cra 80B #25'} type={'text'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Barrio'} id={'validationDefault05'} placeholder={'Robledo'} type={'text'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Teléfono'} id={'validationDefault06'} placeholder={'3216452322'} type={'number'} />
          <Button clase={'form-button d-flex justify-content-center col-12'} classButton={'btn btn-primary'} textButton={'Enviar'} type={'submit'} />
        </form>
      </section>

      <section id='formulario-proveedor' className='formulario-proveedor contenedor-formulario bg-info d-flex flex-column p-4 gap-3 align-items-center justify-content-center'>
        <form class="row g-3 d-flex p-3 col-11 justify-content-between">
          <Titulo titulo={'Registro Proveedor'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Nombre'} id={'validationDefault01'} placeholder={'Juan Perez'} type={'text'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Nit'} id={'validationDefault02'} placeholder={'1-024565010'} type={'number'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Dirección'} id={'validationDefault03'} placeholder={'cra 80B #25'} type={'text'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Teléfono'} id={'validationDefault04'} placeholder={'3216452322'} type={'number'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Correo'} id={'validationDefault05'} placeholder={'juanperez@gmail.com'} type={'email'} />
          <FormItem clase={'form-item col-md-4'} textoLabel={'Nombre del producto'} id={'validationDefault06'} placeholder={'Pasionaria'} type={'text'} />
          <FormTextArea clase={'form-item col-md-12'} id={'validationDefault07'} textLabel={'Descripción de la empresa y producto'} placeholder={'Es una empresa que ofrece un producto...'} />
          <Button clase={'form-button d-flex justify-content-center col-12'} classButton={'btn btn-primary'} textButton={'Enviar'} type={'submit'} />
        </form>
      </section>
    </main>
  )
}
