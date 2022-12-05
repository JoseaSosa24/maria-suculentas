import React from 'react'

export const Article = () => {
    return (
        <article className='articulo d-flex justify-content-center'>
            <section className="card text-bg-dark">
                <img src='https://bit.ly/3VomTgx' className="card-img" height="700px" alt="..." />
                <section className="card-img-overlay mt-5 ">
                    <h1 className="card-title fw-bold bg-black bg-opacity-25 rounded">¿Qué es la marihuana medicinal y cómo elegir una variedad de marihuana medicinal?</h1>
                    <p className="card-text fs-5 fw-bold bg-black bg-opacity-25 rounded"> La marihuana medicinal es aquella que se utiliza para tratar o aliviar una afección, más que para supuestos "fines recreativos" o espirituales. Cualquier tipo de marihuana que contenga una cantidad efectiva de cannabinoides puede
                        ser considerada marihuana medicinal si se utiliza para tal fin.</p>
                    <p className='fs-5 fw-bold bg-black bg-opacity-25 rounded'>
                        Puede ser muy fácil tomar la decisión de utilizar marihuana medicinal, aunque elegir una variedad sí que conlleva cierta dificultad. Muchos pacientes, y la mayoría de nuestros clientes, nunca habían cultivado o probado la marihuana antes de descubrir su uso como medicamento.
                    </p>
                    <p className='bg-black bg-opacity-25 rounded'> Por Sensi Seeds
                        Actualizado el 08/17/2021
                        Revisión médica realizada por Sanjai Sinha, MD</p>
                </section>
            </section>
        </article>
    )
}
