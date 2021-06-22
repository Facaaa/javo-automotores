import React from "react";

const Home = () => {
    return (
        <>
            <div className="division">
                <h2 className="section__titulo"> Osvaldo Automotores </h2>
                <p className="division__p">
                    <em className="section__em"> Consecionario Multimarca ubicado en La Plata, Buenos Aires.</em>
                </p>
                <h5 className="division__titulo">
                    Vení a conocernos. contamos con más de 800mts2 a tu dispocisión para que vivas una experiencia única con nosotros.
                    Tu próximo Auto está acá. No busques más, Vení a Osvaldo.
                </h5>
            </div>
            <article className="articulo articuloBackground">
                <h3 className="articulo__titulo">
                    <span className="articulo__span"> CONSULTANOS </span>
                    Consignaciones, Compras, Ventas, cotización al día de tu auto y más.
                </h3>

                <a href="https://wa.me/+5492216905306"><button type="button" className="btn btn-success bt-lg"> comunicate por Whatsapp </button></a>

                <p className="articulo__parrafo">
                    Contamos con una cartera amplia de FINANCIACIONES de todos los Bancos para que puedas acceder a tu usado o 0Km en cuotas fijas y en pesos, con transferencia incluida. Esta a tu disposición nuestra Atención Personalizada, Gran Variedad de Marcas y Modelos para que puedas elegir el auto a tu medida y necesidad.
                    en Osvaldo nos interesa que tengas la oportunidad de darte la movilidad para llegar a tus sueños.
                </p>
            </article>
        </>
    )
}

export default Home;
