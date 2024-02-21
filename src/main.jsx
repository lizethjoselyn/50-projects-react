import React from 'react'
import ReactDOM from 'react-dom/client'
import { CardsExpanding } from './projects/Cards Expanding/CardsExpanding'

const listaElementos = [
  { imagen: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', texto: 'Explore The World' },
  { imagen: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', texto: 'Wild Forest' },
  { imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80', texto: 'Sunny Beach' },
  { imagen: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80', texto: 'City on Winter' },
  { imagen: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', texto: 'Mountains - Clouds' },
];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardsExpanding elementos={listaElementos} />
    <CardsExpanding elementos={listaElementos} />
    <CardsExpanding elementos={listaElementos} />
  </React.StrictMode>,
)
