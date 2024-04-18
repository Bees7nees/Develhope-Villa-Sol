import fotomasaje1 from '../assets/Img/fotomasaje1.png';
import fotomasaje2 from '../assets/Img/fotomasaje2.png';
import fotosauna from '../assets/Img/fotosauna.png';

function SpaPage () {
    return (
        <>
        <div className='intro-spa'>
            <h2>Nuestro Wellness SPA</h2>
            <p>Aprovecha tus días de vacaciones para mimarte y relajarte en nuestro centro de salud y belleza. Dispone de una piscina climatizada, paseo contracorriente, tres cuellos de cisne descontracturantes y camas de burbujas; 2 saunas y baño turco. baño de vapor, una fuente de hielo, un cubo de agua fría, una ducha oscilante, una ducha escocesa, una ducha vichy con chorros de agua en espalda y piernas con efecto micropeeling relajante y una bañera de hidromasaje aromático.</p>
        </div>

        <h3 className='h3-spa-title'>SALUD Y BIENESTAR PARA TODA LA FAMILIA</h3>
        <div className='spa-container'>
            <img src={fotomasaje1} />
            <p>Un mar de tranquilidad. Modernas y amplias instalaciones con Agua Salada, tratamientos seleccionados y aplicados por expertas y formadas manos y todo lo necesario para hacer realidad el cuidado de la Salud y el Bienestar de toda la familia.</p>
        </div>

        <div className='spa-container'>
            <img src={fotomasaje2} />
            <p>Más de 10 tratamientos faciales a su disposición. Los múltiples efectos de mejora del bienestar de la piel conseguidos mediante el uso de aguas termales han consolidado la oferta de tratamientos de estética termal en los balnearios, más allá de las tradicionales y conocidas curas termales para numerosos problemas de salud.</p>
        </div>

        <div className='tratamientos'>
            <h3>TRATAMIENTOS</h3>
            <div className='tratamientos-container'>
                <span><h5>MASAJES</h5> <p>Nuestra amplia variedad de masajes terapéuticos le permitirán relajarse y lucir un aspecto rejuvenecido.</p></span>
                <span><h5>FACIALES</h5> <p>Nuestra amplia variedad de masajes terapéuticos le permitirán relajarse y lucir un aspecto rejuvenecido.</p></span>
                <span><h5>CUIDADO DE MANOS Y PIES</h5> <p>Nuestra amplia variedad de masajes terapéuticos le permitirán relajarse y lucir un aspecto rejuvenecido.</p></span>
                <span><h5>EXPERIENCIAS EN PAREJA</h5> <p>Nuestra amplia variedad de masajes terapéuticos le permitirán relajarse y lucir un aspecto rejuvenecido.</p></span>
            </div>
        </div>

        <div className='horarios-spa'>
        <img src={fotosauna} />
        <span className='horarios-container'></span>
        </div>
        </>
    )
}

export default SpaPage