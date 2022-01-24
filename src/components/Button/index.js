import React from "react";
import {Button as ButtonComp} from './styles'

function Button ({children, ...props}){

    return <ButtonComp {...props}>{children}</ButtonComp>
    
}

export default Button