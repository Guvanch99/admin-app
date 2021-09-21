import PropTypes from "prop-types";

import './index.scss'

const Button = ({name, onclick, type, disabled, customStyle}) =>
    <button disabled={disabled} onClick={onclick} type={type}
            className={customStyle ? 'button-custom' : "button"}>{name}</button>


export default Button

Button.defaultProps = {
    type: 'button',
    customStyle: false
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.string,
    customStyle: PropTypes.bool

}