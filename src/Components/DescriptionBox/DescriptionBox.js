import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>

        </div>
        <div className='descriptionbox-description'>
        E-commerce is the buying and selling of goods and services over the internet.
        It is conducted over computers, tablets, smartphones, and other smart devices.
        Almost anything can be purchased through e-commerce today, which makes e-commerce highly competitive.
        The process of buying and selling goods and services online typically consists of the exchange of data 
        or currency to process a transaction involving more than one entity or individual.
        E-commerce allows a customer to place an order via online stores, websites, or social channels.
        After the customer places an order, the order details are relayed to a central backend 
        system – an e-commerce platform, which facilitates or performs several tasks
        </div>
      
    </div>
  )
}

export default DescriptionBox
