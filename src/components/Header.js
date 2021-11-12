import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        background: '#009999',
        color: 'white',
        width: '100vw',
        height: '40px',
        paddingBottom: '5px',
      }}
    >
      <p style={{ marginLeft: '35px', color: 'white', fontWeight: 'bold' }}>
        {' '}
        <Link style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }} to="/">
          Home
        </Link>{' '}
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/register">
          Cadastro
        </Link>{' '}
      </p>
    </div>
  )
}
