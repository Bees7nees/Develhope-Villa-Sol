import { Link } from 'react-router-dom'
import classes from "/src/Styles/Footer.module.css"
import { ContactFooterVariant } from './ContactFooterVariant'
import { FormattedMessage } from 'react-intl';



export default function Footer() {



    return (
        <footer id="contacto" className={classes.footerContainer}>
            <div className={classes.footer}>
                <section className={classes.nosotrosFooter}>
                    <Link className={classes.titulo}>
                        <FormattedMessage id="conocenos"/>
                    </Link> 
                        <div className={classes.downcontacto}>
                            <Link className={classes.links}>
                                <FormattedMessage id="events"/>
                            </Link>
                            <Link className={classes.links} to={"/restauranteSunset"}>
                                <FormattedMessage id="buffet"/>
                            </Link>
                            <Link className={classes.links}>
                                <FormattedMessage id="preguntas"/>
                            </Link>
                        </div>
                </section>
                <span className={classes.divisor}></span>
                <section className={classes.reservasFooter}>
                    <Link className={classes.titulo}>
                        <FormattedMessage id="reservar"/>
                    </Link> 
                        <div className={classes.downreserva}>
                            <Link className={classes.links}>
                                <FormattedMessage id="traslado"/>
                            </Link>
                            <Link className={classes.links} to={"/spa"}>
                                <FormattedMessage id="wellness"/>
                            </Link>
                            <Link className={classes.links}>
                                <FormattedMessage id="wellness"/>
                            </Link>
                        </div>
                </section>
                <span className={classes.divisor}></span>
                <section className={classes.redesFooter}>
                    <span className={classes.titulo}>
                        <FormattedMessage id="siguenos"/>
                    </span>
                    <div className={classes.downredes}> 
                        <img src="/src/Assets/svg/facebook.svg" className={classes.svg}/>
                        <img src="/src/Assets/svg/twitter.svg" className={classes.svg}/>
                        <img src="/src/Assets/svg/instagram.svg" className={classes.svg}/>
                    </div>
                </section>
            <ContactFooterVariant/>
            </div>
            <div className={classes.bottomContainer}>
                <Link to="/"><img className={classes.logo} src="/src/Assets/svg/logoWhite.svg" alt="logo"/></Link>
                <div className={classes.politicsContainer}>
                    <Link className={classes.politics} to="/Terms&Conditions">
                        <FormattedMessage id="politica"/>
                    </Link>
                    <p className={classes.politicstext}>
                        <FormattedMessage id="establecido"/>
                    </p>
                </div>
            </div>
        </footer>
    )
}
