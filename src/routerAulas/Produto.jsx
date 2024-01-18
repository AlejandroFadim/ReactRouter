import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Produto = () => {
  const parames = useParams()
  const location = useLocation()
  return (
    <div>
      <h1>Produto {parames.id}</h1>
    </div>
  )
}

export default Produto
