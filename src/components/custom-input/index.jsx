import PropTypes from 'prop-types'

import * as S from "./styled"

const CustomInput = ({name, value, label, error, type, onChange, required, handleBlur, disabled, bg}) => (
    <S.Container>
        <S.Label htmlFor={name}>
            {label}
        </S.Label>
        <S.Input
            bg={bg}
            layout={error}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            autoComplete="off"
            placeholder={label}
            required={required}
            autoFocus={name === 'adminName'}
            onBlur={handleBlur}
            disabled={disabled}
        />

        {error ? <S.Error>{error}</S.Error> : null}
    </S.Container>
)

export default CustomInput

CustomInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    handleBlur: PropTypes.func,
}