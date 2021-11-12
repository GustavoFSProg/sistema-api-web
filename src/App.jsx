import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import api from './service/api'
import { Ul, Wrapper } from './style'

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
    <>
      <Header />

      <div>
        <h1 style={{ marginLeft: '20px', marginTop: '20px' }}>E-Comerce Products</h1>

        <Wrapper>
          {product.map((item) => (
            <Ul key={item._id}>
              <li>
                <img src={item.image} alt="imagem" width="180" />
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
            </Ul>
          ))}

          <header className="App-header"></header>
        </Wrapper>
      </div>
    </>
  )
}

export default App
