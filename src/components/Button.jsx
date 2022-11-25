import React from 'react'

export const Button = ({clase, classButton, textButton, type, id}) => {
    return (
        <section class={clase} id={id}>
            <button class={classButton} type={type}>{textButton}</button>
        </section>
    )
}
