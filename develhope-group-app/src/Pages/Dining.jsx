import HorarioRestaurante from "../Components/HorarioRestaurante"
// import CarouselMenu from "../Components/CarouselMenu"
import TipoMenu from "../Components/TipoMenu"
import DividingLines from "../Components/DividingLines"
import TitleDescription from "../Components/TitleDescription"
import Banner from "/src/Components/Banner.jsx"

export default function Dining() {




    return (
        <>
            <Banner fotomain="/src/Assets/Img/sunset.png"/>
            <TitleDescription title="Restaurante Sunset" description="Ubicado en el corazón de Andalucía, este restaurante 5 estrellas fusiona 
            la rica tradición culinaria andaluza con un toque contemporáneo de alta cocina. Al entrar, los huéspedes son recibidos por una atmósfera 
            de elegancia y sofisticación, donde la decoración refleja la riqueza cultural de la región, con detalles que evocan la artesanía local y 
            los paisajes emblemáticos. La carta ofrece una exquisita selección de platos elaborados con ingredientes frescos y de temporada, 
            que celebran la diversidad gastronómica de Andalucía. Cada creación culinaria es una obra maestra en sí misma, presentada con una 
            meticulosa atención al detalle y un equilibrio armonioso de sabores. El servicio impecable, atento y personalizado, garantiza una 
            experiencia gastronómica inolvidable para cada comensal, mientras que la cuidada selección de vinos locales e internacionales 
            complementa a la perfección cada bocado. Con su ambiente refinado y su excepcional calidad gastronómica, este restaurante se erige 
            como un destino gastronómico de renombre en la escena culinaria de Andalucía."/> 
            <TipoMenu/>
            <DividingLines/>?
            <HorarioRestaurante />
            <DividingLines/>?
            {/* <CarouselMenu/> */}
        </>
    )
}
