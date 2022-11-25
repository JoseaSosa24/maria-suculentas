import React from 'react'

export const Carousel = () => {
    return (
        <section id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <section class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </section>
            <section class="carousel-inner">
                <section class="carousel-item active">
                    <img src="..." class="d-block w-100" alt="..."/>
                </section>
                <section class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </section>
                <section class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </section>
            </section>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </section>
    )
}
