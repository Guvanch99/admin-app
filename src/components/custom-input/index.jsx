import classNames from 'classnames'
import PropTypes from 'prop-types'

import {Container,Label,Input,Error} from "./index.styled";

const CustomInput = ({name, value, label, error, type, onChange, required, handleBlur, disabled}) => (
    <Container>
        <Label htmlFor={name}>
            {label}
        </Label>
        <Input
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

        {error ? <Error className="input-container__error">{error}</Error> : null}
    </Container>
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