import React from 'react'

export const FormTextArea = ({clase,id,textLabel,placeholder}) => {
    return (
        <section class={clase}>
            <label for={id} class="form-label fw-bold fs-5">{textLabel}</label>
            <textarea class="form-control fs-5" id={id} placeholder={placeholder} rows="4" required />
        </section>
    )
}
