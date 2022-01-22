import React from 'react'

import Symbol from '../../assets/burger2.svg'
import H1 from '../../components/Title'
import Button from '../../components/Button'

import { 
    Container,
    Image,
    ContainerItens,
    } from './styles'
    
    const Requests = () => {
    
      return (
        <Container>
          <Image alt="logo-imagem" src={Symbol} />
          <ContainerItens>
            <H1>Pedidos</H1>
        
            <Button isBack={true}>Voltar</Button>
    
          </ContainerItens>
        </Container>)
}
       
export default Requests