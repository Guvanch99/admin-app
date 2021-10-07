import {useState} from "react";
import PropTypes from "prop-types";
import * as S from './styled'

const ToolTip = ({children,text, position}) => {
    const [isVisible, setIsVisible] = useState(false)
    const hide = () => setIsVisible(false)
    const show = () => setIsVisible(true)

    return (
        <S.Container>
            {isVisible ? <S.ToolTip position={position}>{text}</S.ToolTip> : null}
            <S.TargetElement onMouseEnter={show} onMouseLeave={hide}>
                {children}
            </S.TargetElement>
        </S.Container>
    )
}

export default ToolTip

ToolTip.propTypes = {
    children:PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired

}
