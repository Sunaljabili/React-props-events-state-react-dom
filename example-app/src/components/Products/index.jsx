import React from 'react'
import List from '../List'
import ListItem from '../ListItem'

const Products = ({products}) => {
  return (
    <List>
      {products && products.map((item)=>{
        return <ListItem key={item.id} product={item}/>
      })}
    </List>
  )
}

export default Products
