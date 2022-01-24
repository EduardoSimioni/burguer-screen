import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Logo from '../../assets/burger1.svg';
import H1 from '../../components/Title';
import InputLabel from '../../components/InputLabel';

import Button from '../../components/Button';

import {
  Container,
  Image,
  ContainerItens,
  Input
} from './styles';

const App = () => {
  const [order, setOrder] = useState([])
  const inputName = useRef()
  const inputOrder = useRef()
  const navigate = useNavigate()

  async function addOrder() {

     const { data: createOrder } = await axios.post("http://localhost:3001/allRequests", {
       name:inputName.current.value,
       order:inputOrder.current.value,
     })
     setOrder([...order, createOrder])
     navigate("/requests")
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Logo} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input  ref={inputOrder}></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input  ref={inputName}></Input>

        <Button onClick={addOrder}>Novo Pedido</Button>

      </ContainerItens>
    </Container>
  )
}

export default App