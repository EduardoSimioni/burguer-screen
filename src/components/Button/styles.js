import styled from "styled-components";

export const Button= styled.button`
    width: 342px;
    height: 68px;
    background: #D93856;
    border: none;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    margin-top: 76px;

    ${props => props.isBack && `
        background: rgba(255, 255, 255, 0.14);`
    }
`;