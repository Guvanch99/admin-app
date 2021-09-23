import PropTypes from 'prop-types'

import * as S from "./styled"

const CustomInput = ({name, value, label, error, type, onChange, required, handleBlur, disabled}) => (
    <S.Container>
        <S.Label htmlFor={name}>
            {label}
        </S.Label>
        <S.Input
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

        {error ? <S.Error className="input-container__error">{error}</S.Error> : null}
    </S.Container>
)

export default CustomInput

CustomInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    handleBlur: PropTypes.func
}