import styled from "styled-components";

export const Container = styled.div`
    background-color: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    
`;

export const Image = styled.img`
    margin-top: 30px;
    
`;

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export const Order = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    background: rgba(255, 255, 255, 0.25);

    border-radius: 14px;
    width: 342px;
    height: 101px;

    border: none;
    outline: none;
    margin-top: 20px;
`;

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    
    button {
        background: none;
        border: none;
        cursor: pointer;
        align-self: flex-end;
        margin-right: 25px;
        cursor: pointer;

        &:hover{
        opacity: 0.6
    }
    }
`;

export const ParagraphOrder = styled.li`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    list-style: none;
    padding-left: 20px;
`;

export const ParagraphName = styled.li`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    list-style: none;
    padding-left: 20px;
`;
