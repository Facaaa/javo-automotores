import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="piepagina piePaginaSection">
                <section>
                    <ul className="piePagina_ul">
                        <li className="pie__boton"><a href="https://www.instagram.com/osvaldoautomotores/" button type="button" className="btn btn-dark btn-lg"> Instagram </a></li>
                        <li className="pie__boton"><a href="https://www.facebook.com/AutomotoresOsvaldo/" button type="button" className="btn btn-dark btn-lg"> Facebook </a></li>
                        <li className="pie__boton"><a href="https://www.instagram.com/jdmesteticavehicular/?hl=es-la" button type="button" className="btn btn-dark btn-lg">Instagram JDMdetail</a></li>
                    </ul>
                    <p className="piePaginaP">
                        Las imágenes publicadas en este sitio son de carácter ilustrativo.
                        Osvaldo Automotores Av.13 esquina 73, La Plata.
                        Web designers C.O. La plata. contacto: (0221) 690-5306
                    </p>

                </section>
            </footer>
        </>
    );
}

export default Footer;
