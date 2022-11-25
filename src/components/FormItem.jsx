import React from 'react'

export const FormItem = ({textoLabel,id,clase,placeholder,type}) => {
    return (
        <section class={clase}>
            <label for={id} class="form-label">{textoLabel}</label>
            <input type={type} class="form-control" id={id} placeholder={placeholder} required />
        </section>
    )
}
