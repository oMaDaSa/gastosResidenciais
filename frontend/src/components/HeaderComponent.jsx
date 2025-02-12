import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className = 'navbar navbar-dark bg-dark '>
                <a className = "navbar-brand mx-3" href="http://localhost:3000/persons">Gerenciamento de Gastos Residencias</a>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent