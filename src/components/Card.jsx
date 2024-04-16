import classes from "/src/Style/Card.module.css"

export default function Card() {

    return (
        <div className={classes.container}>
            <img className={classes.img} src="/src/Assets/img/terraza.png"/>
            <div className={classes.textContainer}>
                <h3 className={classes.titulo}>LA MEJOR TERRAZA <br/> DE CÁDIZ</h3>
                <p className={classes.parrafo}>La terraza invita a los comensales a sumergirse en un oasis de tranquilidad mientras saborean los sabores frescos del mar. Cada bocado, desde la delicadeza de las gambas blancas hasta la explosión de sabor de un auténtico plato de pescaíto frito, es una celebración de la riqueza culinaria de la región.</p>
                <div className={classes.horarioContainer}>
                    <img src="/src/Assets/svg/clock.svg" className={classes.svg}/>
                    <div className={classes.parrafoHorario}>
                        <p className={classes.texto}>Todos los días</p>
                        <p className={classes.texto}>12hs - 01hs</p>
                        <p className={classes.texto}>vestimenta casual</p>
                    </div>
                </div>
                <button className={classes.placeholder}>reservar</button>
            </div>
        </div>
    )
}
