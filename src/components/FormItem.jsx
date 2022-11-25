import React from 'react'

export const FormItem = ({textoLabel,id,clase,placeholder,type}) => {
    return (
        <section class={clase}>
            <label for={id} class="form-label fw-bold fs-5">{textoLabel}</label>
            <input type={type} class="form-control fs-5" id={id} placeholder={placeholder} required />
        </section>
    )
}
