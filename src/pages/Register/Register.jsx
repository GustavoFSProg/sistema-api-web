import React, { useState } from 'react'
import api from '../../service/api'
import Header from '../../components/Header'
import { FormContainer, Container, Input, H1 } from './style'

export default function Register() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState([])

  // const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      data.append('title', title)
      data.append('description', description)
      data.append('price', price)
      data.append('image', image)

      await api.post('/register', data)

      alert('Cadastro realizado com sucesso!')
      return data
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }
  return (
    <>
      <Header />
      <Container>
        <br />
        <br />

        <H1>Cadastro de Produtos </H1>
        <br />

        <FormContainer>
          <form onSubmit={handleSubmit}>
            <br />
            <p>Selecione a Imagem</p>
            <input
              type="file"
              id="image"
              className="botao-imagem"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <br />
            <br />

            <label
              style={{
                display: 'flex',
                marginTop: '10px',
                marginBottom: '8px',
              }}
            >
              Nome:
            </label>
            <Input
              placeholder="Digite o Nome do Produto"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />

            <label
              style={{
                display: 'flex',
                marginTop: '18px',
                marginBottom: '8px',
              }}
            >
              Preço:
            </label>
            <Input
              placeholder="Digite o Preço do Produto"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />

            <label
              style={{
                display: 'flex',
                marginTop: '18px',
                marginBottom: '8px',
              }}
            >
              Descrição:
            </label>
            <Input
              placeholder="Digite a Descrição do Produto"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <br />

            <button
              style={{
                borderRadius: '10px',
                background: '#008080',
                width: '100%',
                height: '38px',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '14px',
              }}
              className="confirm-button"
              type="submit"
            >
              Cadastrar
            </button>
          </form>
        </FormContainer>
      </Container>
    </>
  )
}
