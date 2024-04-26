import classes from "/src/Styles/title-description.module.css"
import PropTypes from "prop-types"

TitleDescription.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default function TitleDescription ({ title, description}) {
    return (
        <div className={classes.contenedor}>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.description}>{description}</p>
        </div>
    )
}