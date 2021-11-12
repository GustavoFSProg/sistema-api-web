import React, { useState } from 'react'
import api from '../../service/api'
import Header from '../../components/Header'

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <br />
        <br />

        <h1>Cadastro de Produtos</h1>
        <br />

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <br />

            <input
              type="file"
              id="image"
              className="botao-imagem"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <br />

            <label>Nome: </label>
            <input
              // placeholder="Digite o Nome do Produto"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />

            <label>Preço: </label>
            <input
              // placeholder="Digite o Preço do Produto"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />

            <label>Descrição: </label>
            <input
              // placeholder="Digite o Preço do Produto"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <br />

            <button className="confirm-button" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
