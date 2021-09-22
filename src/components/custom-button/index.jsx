import PropTypes from "prop-types";

import {Button} from "./index.styled";

const CustomButton = ({name, onclick, type, disabled}) =>
    <Button disabled={disabled} onClick={onclick} type={type}>{name}</Button>


export default CustomButton

CustomButton.defaultProps = {
    type: 'button',
}

CustomButton.propTypes = {
    name: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.string,
}