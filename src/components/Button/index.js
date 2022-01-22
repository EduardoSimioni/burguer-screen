import React from "react";
import {Button as ButtonComp} from './styles'

function Button ({children, isBack}){

    return <ButtonComp isBack={isBack}>{children}</ButtonComp>
}

export default Button