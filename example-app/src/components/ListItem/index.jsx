import React from 'react'
import Title from '../Title'

const ListItem = ({product}) => {
  return (
    <div>
      <Title name={product.name}/>
    </div>
  )
}

export default ListItem
