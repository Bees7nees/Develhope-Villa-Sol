

export default function Card() {

    return (
        <div className={classes.container}>
            <img className={classes.img}/>
            <div className={classes.textContainer}>
                <h3 className={classes.titulo}>LA MEJOR TERRAZA DE CÁDIZ</h3>
                <p className={classes.parrafo}>COCINA DE MERCADO</p>
                <div className={classes.horarioContainer}>
                    <p className={classes.texto}>Todos los dias</p>
                    <p className={classes.texto}>12hs - 01hs</p>
                    <p className={classes.texto}>vestimenta casual</p>
                </div>
                <button className={classes.placeholder}>reservar</button>
            </div>
        </div>
    )
}
