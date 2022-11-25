import React from 'react'
import { FormItem } from './FormItem'
import { Titulo } from './Titulo'

export const SeccionFormulario = () => {
    return (
        <section className='contenedor-formulario bg-info d-flex flex-column p-4 gap-3 align-items-center justify-content-center'>
            <form class="row g-3 d-flex p-3 col-11 justify-content-between">
                <Titulo titulo={'Registro Producto'} />
                <FormItem textoLabel={''} foor={'validationDefault01'} id={'validationDefault01'} placeholder={''} type={''}/>
            </form>

        </section>
    )
}
