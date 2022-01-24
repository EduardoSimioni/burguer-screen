import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Thrash from '../../assets/trash.svg'
import Symbol from '../../assets/burger2.svg'
import H1 from '../../components/Title'
import Button from '../../components/Button'

import {
  Container,
  Image,
  ContainerItens,
  Order,
  ContainerButton,
  ParagraphOrder,
  ParagraphName
} from './styles'

const Requests = () => {
  const navigate = useNavigate()
  const [order, setOrder] = useState([])

  useEffect(() => {
    async function fetchOrder() {
      const { data: newOrder } = await axios.get("http://localhost:3001/allRequests")
      setOrder(newOrder)
    }
    fetchOrder()
  },[])

  async function deleteUser(orderId) {
    await axios.delete(`http://localhost:3001/allRequests/${orderId}`)

    const newOrder = order.filter(order => order.id !== orderId)

    setOrder(newOrder)
  }

  function goBackPage() {
    navigate("/")
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Symbol} />
      <ContainerItens>
        <H1>Pedidos</H1>
        
          <ContainerButton>
          {order.map(order => (
            <Order key={order.id}>
              <ParagraphName>{order.name}</ParagraphName> 
              
              <button onClick={() => deleteUser(order.id)}>
                <img src={Thrash} alt="lata-de-lixo" />
              </button>

              <ParagraphOrder>{order.order}</ParagraphOrder>
            </Order>
          ))
          }
          </ContainerButton>

        <Button onClick={goBackPage} isBack={true}>Voltar</Button>

      </ContainerItens>
    </Container>)
}

export default Requests