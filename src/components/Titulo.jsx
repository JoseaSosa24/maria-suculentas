import React from 'react'

export const Titulo = ({titulo,className}) => {
    return (
        <section className={className}>
            <h3 className='fw-bold'>{titulo}</h3>
        </section>
    )
}
