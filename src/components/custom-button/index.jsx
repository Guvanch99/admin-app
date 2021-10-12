import PropTypes from "prop-types"

import * as S from "./styled"

const CustomButton = ({name, onclick, type, disabled, children, bg}) =>
    <S.Button bg={bg} disabled={disabled} onClick={onclick} type={type}>{name || children}</S.Button>


export default CustomButton

CustomButton.defaultProps = {
    type: 'button',
}

CustomButton.propTypes = {
    name: PropTypes.string,
    onclick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool]),
    children: PropTypes.node,
    bg: PropTypes.bool
}