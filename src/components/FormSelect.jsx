import React from 'react'

export const FormSelect = ({ opcion, textoLabel, clase, id }) => {
    return (
        <section class={clase}>
            <label for={id} class="form-label">{textoLabel}</label>
            <select class="form-select" id={id} required>
                <option selected disabled value="">Seleccione...</option>
                <option>{opcion.uno}</option>
                <option>{opcion.dos}</option>
            </select>
        </section>
    )
}
