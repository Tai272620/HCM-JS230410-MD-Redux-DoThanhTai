import React, {useState} from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { addProduct } from '../stores/action';
import { useDispatch } from 'react-redux';
import Product from './Product';
const { Meta } = Card;

const listCart = JSON.parse(localStorage.getItem("listCart")) || [];
export default function ListProducts({ productStore, setCartStore }) {

  const dispatch = useDispatch();
  const handleAddProduct = (product) => {
   
    dispatch(addProduct(product))
    
    for (let i = 0; i < listCart.length; i++) {
      if (listCart[i].productId === product.productId) {
        listCart[i].quantity += 1
        localStorage.setItem("listCart", JSON.stringify(listCart));
        return
      }
    }
    listCart.push(product);
    localStorage.setItem("listCart", JSON.stringify(listCart));
  }
  return (
    <div className='products-container'>
      <h1>List Products</h1>
      {productStore.map((product, index) => (
        <Product product={product} key={index} handleAddProduct={handleAddProduct} setCartStore={setCartStore}/>
      ))}
  </div>
  )
}
