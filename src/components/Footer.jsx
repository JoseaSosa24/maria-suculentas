import React from 'react'
import logo from '../../src/assets/icon/icon-footer/facebook.png'
import ImagenesFooter from '../assets/ImagenesFooter'
export const Footer = () => {
    return (
        <footer className="text-center text-lg-start">

            <section className="d-flex justify-content-center align-items-center p-4 border-bottom">

                <section className="me-5 d-none d-lg-block">
                    <span className='fw-bold fs-5'>Nuestras Redes Sociales:</span>
                </section>

                <section>
                    <a href="" className="me-4 text-reset">
                        <img className="fab fa-facebook" src={ImagenesFooter.facebook} width="40" height="40" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <img className="fab fa-twitter" src={ImagenesFooter.instagram} width="40" height="40" />
                    </a>

                    <a href="" className="me-4 text-reset">
                        <img className="fab fa-instagram" src={ImagenesFooter.twitter} width="40" height="40" />
                    </a>

                </section>
            </section>

            <section className="">
                <section className="container text-center text-md-start ">
                    <section className="row mt-3">
                        <section className="col-md-10 col-lg-10 col-xl-10 mx-auto mb-md-0 mb-4 d-flex justify-content-center">
                            <h6 className="text-uppercase fw-bold mb-4">Contacto:</h6>
                            <p><i className="fas fa-home me-3"></i> Medellín-Colombia</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                mariasuculentas@suculentas.net
                            </p>
                            <p><i className="fas fa-phone me-3"></i> +57 3254632131</p>
                            <p><i className="fas fa-print me-3"></i> +57 3221522363</p>
                        </section>
                    </section>
                </section>
            </section>
            
            <section className='d-flex justify-content-center align-items-center' >
                © 2022 Copyright
                {/* <a class="text-white" href="https://mdbootstrap.com/"></a> */}
            </section>

        </footer>
    )
}
