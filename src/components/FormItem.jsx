import React from 'react'

export const FormItem = ({textoLabel,id,clase,placeholder,type}) => {
    return (
        <section className={clase}>
            <label for={id} className="form-label fw-bold fs-5">{textoLabel}</label>
            <input type={type} className="form-control fs-5" id={id} placeholder={placeholder} required />
        </section>
    )
}
