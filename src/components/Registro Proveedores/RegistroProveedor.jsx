import React from 'react'
import { FormItem } from '../FormItem';
import { Titulo } from '../Titulo';
import { FormTextArea } from '../FormTextArea';
import { Button } from '../Button';
export const RegistroProveedor = () => {
    return (
        <section id='formulario-proveedor' className='formulario-proveedor contenedor-formulario d-flex flex-column gap-3 align-items-center justify-content-center w-75'>
            <form class="row g-3 d-flex col-12 justify-content-between">
                <Titulo titulo={'Registro Proveedor'} />
                <FormItem clase={'form-item col-md-4'} textoLabel={'Nombre'} id={'validationDefault01'} placeholder={'Juan Perez'} type={'text'} />
                <FormItem clase={'form-item col-md-4'} textoLabel={'Nit'} id={'validationDefault02'} placeholder={'1-024565010'} type={'number'} />
                <FormItem clase={'form-item col-md-4'} textoLabel={'Dirección'} id={'validationDefault03'} placeholder={'cra 80B #25'} type={'text'} />
                <FormItem clase={'form-item col-md-4'} textoLabel={'Teléfono'} id={'validationDefault04'} placeholder={'3216452322'} type={'number'} />
                <FormItem clase={'form-item col-md-4'} textoLabel={'Correo'} id={'validationDefault05'} placeholder={'juanperez@gmail.com'} type={'email'} />
                <FormItem clase={'form-item col-md-4'} textoLabel={'Nombre del producto'} id={'validationDefault06'} placeholder={'Pasionaria'} type={'text'} />
                <FormTextArea clase={'form-item col-md-12'} id={'validationDefault07'} textLabel={'Descripción de la empresa y producto'} placeholder={'Es una empresa que ofrece un producto...'} />
                <Button clase={'form-button d-flex justify-content-center col-12'} classButton={'btn btn-primary col-3'} textButton={'Enviar'} type={'submit'} />
            </form>
        </section>
    )
}
