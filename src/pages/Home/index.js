import React from 'react'

import Logo from '../../assets/burger1.svg'
import H1 from '../../components/Title'
import InputLabel from '../../components/InputLabel'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { 
Container,
Image,
ContainerItens,
} from './styles'

const App = () => {

  return (
    <Container>
      <Image alt="logo-imagem" src={Logo} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input> </Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input> </Input>

        <Button>Novo Pedido</Button>

      </ContainerItens>
    </Container>)
}

export default App