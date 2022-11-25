import React from 'react'

export const Card = ({src,cardTitle,cardText}) => {
    return (
        <section className="col d-flex justify-content-center">
            <section className="card h-100">
                <img src={src} className="card-img-top " alt="img-card" />
                <section className="card-body rounded-bottom">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardText}</p>
                </section>
            </section>
        </section>
    )
}
