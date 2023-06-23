import React, { useState } from 'react'
import ListProducts from './components/ListProducts'
import { useSelector } from 'react-redux'
import CartProducts from './components/CartProducts'

export default function AddToCartRedux() {
  const productStore = useSelector(state=>state.productStore)
  const [cartStore, setCartStore] = useState(useSelector(state=>state.cartStore))
  return (
    <div style={{display:"flex"}}>
      <ListProducts productStore={productStore} setCartStore={setCartStore}/>
      <CartProducts cartStore={cartStore}/>
    </div>
  )
}
