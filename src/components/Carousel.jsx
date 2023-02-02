import React from 'react'
import { Titulo } from './Titulo'
export const Carousel = () => {
    return (
        <section className='contenedor-carousel d-flex justify-content-center align-items-center flex-column mt-5 h-75'>
        <Titulo titulo={'Productos utilizados solo con el fin MEDICINAL'}/>
            <section id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <section className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </section>
                <section className="carousel-inner rounded mt-5">
                    <section className="carousel-item active">
                        <img src="../../src/assets/img/img-caurosel/1.jpg" className="d-block w-100" alt="..." />
                        <section className="carousel-caption d-none d-md-block">
                            <h3>Master Kush</h3>
                            <p> 90 – 100 % indica</p>
                        </section>
                    </section>
                    <section className="carousel-item">
                        <img src="../../src/assets/img/img-caurosel/2.jpg" className="d-block w-100" alt="..." />
                        <section className="carousel-caption d-none d-md-block">
                            <h3>Shiva Skunk</h3>
                            <p>85% indica.</p>
                        </section>
                    </section>
                    <section className="carousel-item">
                        <img src="../../src/assets/img/img-caurosel/3.jpg" className="d-block w-100" alt="..." />
                        <section className="carousel-caption d-none d-md-block">
                            <h3>Big Bud</h3>
                            <p>85 % indica</p>
                        </section>
                    </section>
                </section>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </section>
        </section>
    )
}
