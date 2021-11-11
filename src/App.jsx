import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import api from './service/api'

function App() {
  const [product, setProduct] = useState([])

  async function getAllProducts() {
    const { data } = await api.get('/')

    setProduct(data)

    console.log(data)

    return product
  }

  useEffect(() => {
    getAllProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <br />
      <br />

      <Link to="/register">Cadastro</Link>
      <br />
      <br />
      <div className="App" style={{ display: 'grid', gridTemplateColumns: '2fr 2fr' }}>
        {product.map((item) => (
          <ul
            key={item._id}
            style={{
              background: 'lightgray',
              width: '90%',
              height: '350px',
              paddingTop: '50px',
              borderRadius: '13px',
              listStyle: 'none',
              marginLeft: '17px',
            }}
          >
            <li>
              <img src={item.image} alt="imagem" width="180" />
              <p>{item.image}</p>
            </li>
            <li>
              Titulo:
              {item.title}
            </li>
            <li>
              Descrição:
              {item.description}
            </li>

            <li>
              Preço:
              {item.price}
            </li>
          </ul>
        ))}

        <header className="App-header"></header>
      </div>
    </div>
  )
}

export default App
