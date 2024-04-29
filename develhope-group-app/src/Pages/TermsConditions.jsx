import fotomarketing from '../assets/Img/fotomarketing.png';
import DividingLines from '../Components/DividingLines';

function TermsConditions () {
    return (
        <>
        <div className="sections-termscond">
            <h1>Términos & Condiciones</h1>
            <section>1. Reservas y cancelaciones</section> <span>Todas las reservas en Villa del Sol están sujetas a disponibilidad y deben ser confirmadas mediante un pago anticipado o una tarjeta de crédito válida. Se aplicarán cargos por cancelación según nuestras políticas establecidas.</span>
            <section>2. Registro de Entrada y Salida</section> <span>El registro de entrada se realiza a partir de las 15:00 horas y el de salida antes de las 12:00 horas del día de partida. Se pueden aplicar cargos adicionales por check-in anticipado o check-out tardío, sujeto a disponibilidad.</span>
            <section>3. Política de Pagos</section> <span>Los huéspedes deben proporcionar una tarjeta de crédito válida al momento del registro de entrada para cubrir los gastos adicionales durante su estadía. Se realizará una preautorización para cubrir posibles cargos adicionales.</span>
            <section>4. Política de Mascotas</section> <span>Se admiten mascotas en Villa del Sol bajo petición y con un cargo adicional. Los propietarios son responsables de la conducta de sus mascotas y deben cumplir con las normas de higiene y seguridad del hotel.</span>
            <section>5. Instalaciones y Servicios</section> <span>Los huéspedes tienen acceso a todas las instalaciones y servicios ofrecidos por Villa del Sol, incluyendo la piscina, el gimnasio y el restaurante. Algunos servicios pueden estar sujetos a cargos adicionales.</span>
            <section>6. Política de No Fumar</section> <span>Villa del Sol es un establecimiento libre de humo. Se prohíbe fumar en todas las áreas interiores y en las áreas designadas del exterior. Se aplicarán cargos por limpieza adicional en caso de incumplimiento de esta política.</span>
            <section>7. Responsabilidades del Huésped</section> <span>Los huéspedes son responsables de cualquier daño causado a las instalaciones o propiedades de Villa del Sol durante su estadía. Se aplicarán cargos por daños, pérdidas o robos.</span>
            <section>8. Privacidad y Protección de Datos</section> <span>Villa del Sol respeta la privacidad de sus huéspedes y cumple con todas las leyes y regulaciones de protección de datos. La información personal proporcionada por los huéspedes se utiliza únicamente con fines de registro y gestión de reservas.</span>
            <section>9. Normas de Conducta</section> <span>Se espera que todos los huéspedes de Villa del Sol mantengan un comportamiento adecuado y respeten las normas de convivencia. Se pueden tomar medidas disciplinarias contra aquellos que perturben la tranquilidad de otros huéspedes.</span>
            <section>10. Modificaciones y Actualizaciones</section> <span>Villa del Sol se reserva el derecho de modificar o actualizar estos términos y condiciones en cualquier momento. Los huéspedes serán informados sobre cualquier cambio relevante antes de su entrada en vigor.</span>
        </div>
        <div>
            <DividingLines color={"#213242"} length={"1rem"} />
            <DividingLines color={"#B08912"} length={"1rem"} />
        </div>   
        <div className="termscond-2">
            <picture className='fotomarketing'><img src={fotomarketing} /></picture>
            <div className="history-contact">
                <div className="ourhistory"><h3>DESCUBRE NUESTRA HISTORIA</h3> <p>Cádiz, una ciudad con una rica historia y una vibrante cultura, ofrece a los visitantes una experiencia única llena de lugares históricos fascinantes. En este artículo, exploraremos algunos de los sitios emblemáticos que no debes perderte durante tu visita a esta encantadora ciudad andaluza. Además, destacaremos cómo el Hotel VillaSol puede servir como tu base ideal para explorar estos tesoros históricos. ¡Prepárate para un viaje en el tiempo y la cultura en Cádiz!</p> </div>
                <div className="contact"><h3>CONTACTO DEL DEPARTAMENTO DE MÁRKETING DE VILLASOL</h3> <p>E-mail: marketing@villasol.com</p> <p>Teléfono: +34 000 11 22 33</p> </div>
            </div>
        </div>
        </>
    )
}

export default TermsConditions;