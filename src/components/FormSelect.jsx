import React from 'react'

export const FormSelect = ({ opcion, textoLabel, clase, id }) => {
    return (
        <section class={clase}>
            <label for={id} class="form-label fw-bold fs-5">{textoLabel}</label>
            <select class="form-select fs-5" id={id} required>
                <option selected disabled value="">Seleccione...</option>
                <option>{opcion.uno}</option>
                <option>{opcion.dos}</option>
            </select>
        </section>
    )
}
