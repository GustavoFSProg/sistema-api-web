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
            <p>Selecione a Imagem</p>
            <input
              type="file"
              id="image"
              className="botao-imagem"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <br />

            <label
              style={{
                display: 'flex',
                marginLeft: '-342px',
                marginTop: '10px',
                marginBottom: '8px',
              }}
            >
              Nome:{' '}
            </label>
            <input
              placeholder="Digite o Nome do Produto"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                height: '45px',
                width: '390px',
                border: '1px solid #a6a6a6',
                borderRadius: '10px',
                background: '#e6ffe6',
                fontSize: '16px',
                paddingLeft: '15px',
              }}
            />
            <br />

            <label
              style={{
                display: 'flex',
                marginTop: '6px',
                marginLeft: '-342px',
                marginBottom: '8px',
              }}
            >
              Preço:{' '}
            </label>
            <input
              placeholder="Digite o Preço do Produto"
              style={{
                height: '45px',
                width: '390px',
                border: '1px solid #a6a6a6',
                borderRadius: '10px',
                background: '#e6ffe6',
                fontSize: '16px',
                paddingLeft: '15px',
              }}
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />

            <label
              style={{
                display: 'flex',
                marginTop: '6px',

                marginLeft: '-318px',
                marginBottom: '8px',
              }}
            >
              Descrição:
            </label>
            <input
              placeholder="Digite a Descrição do Produto"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                height: '45px',
                width: '390px',
                border: '1px solid #a6a6a6',
                borderRadius: '10px',
                background: '#e6ffe6',
                fontSize: '16px',
                paddingLeft: '15px',
              }}
            />
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
          </div>
        </form>
      </div>
    </>
  )
}
