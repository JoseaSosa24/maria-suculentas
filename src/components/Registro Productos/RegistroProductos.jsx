import React from 'react';
import { FormItem } from '../FormItem';
import { FormSelect } from '../FormSelect';
import { Titulo } from '../Titulo';
import { FormTextArea } from '../FormTextArea';
import { Button } from '../Button';

export const RegistroProductos = () => {
    return (
        <section id="formulario-productos" className='formulario-productos contenedor-formulario d-flex flex-column  align-items-center justify-content-center'>
            <form class="row g-3 d-flex col-11 justify-content-between">
                <Titulo titulo={'Registro Producto'} className={'mb-2'} />
                <FormItem clase={'form-item col-md-4 mb-5'} textoLabel={'Nombre'} id={'validationDefault01'} placeholder={'Pasionaria'} type={'text'} />
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
    )
}
