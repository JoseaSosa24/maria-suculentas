import React from 'react'
import { Card } from './Card'

export const Galeria = () => {
    return (
        <section className="galeria row row-cols-md-4 g-4 mt-5">
            <Card src={'https://www.hogarmania.com/archivos/201210/hiperico-1-320x180x80xX.jpg'}
                cardTitle={'Hipérico'}
                cardText={`El hipérico alivia los síntomas de la depresión 
                        leve o moderada y también es útil en casos de trastorno de espectro autista, 
                        ansiedad o agotamiento. Tomar en infusión, tintura o cápsulas.
                        No utilizar en combinación con otra medicación sin consejo del médico.`} />

            <Card src={'https://www.hogarmania.com/archivos/201911/plantas-combatir-insomnio-melisa-320x180x80xX.jpg'}
                cardTitle={'Melisa'}
                cardText={`Antidepresiva, estimulante y calmante, la melisa levanta el ánimo y calma la ansiedad, el nerviosismo y los ataques de pánico. 
                        Útil para tratar el insomnio y las cefaleas. 
                        Completamente inocua y de agradables sabor, es apta para todo el mundo.`} />
            <Card src={'https://www.hogarmania.com/archivos/201212/pasionaria-320x180x80xX.jpg'}
                cardTitle={'Pasionaria'}
                cardText={`La pasionaria es una hierba suave con un efecto sedante excelente para el tratamiento del insomnio y la ansiedad. 
                        Combina bien con la manzanilla para tomar como infusión contra el insomnio y las jaquecas tensionales.`} />
            <Card src={'https://www.hogarmania.com/archivos/201305/bufera-planta-medicinal-para-el-estres-o-el-agotamiento-320x180x80xX.jpg'}
                cardTitle={'Bufera'}
                cardText={`La bufera es una hierba conocida en la tradición ayurvédica como adaptógena: 
                        que ayuda al cuerpo a soportar los efectos del estrés a largo plazo. 
                        Contribuye a recuperar la energía y vitalidad en quienes sufren agotamiento. 
                        Es preferible tomarla en tintura o polvos.`} />
        </section>

    )
}
