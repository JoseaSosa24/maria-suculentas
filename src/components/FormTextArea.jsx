import React from 'react'

export const FormTextArea = ({clase,id,textLabel,placeholder}) => {
    return (
        <section className={clase}>
            <label for={id} className="form-label fw-bold fs-5">{textLabel}</label>
            <textarea className="form-control fs-5" id={id} placeholder={placeholder} rows="4" required />
        </section>
    )
}
