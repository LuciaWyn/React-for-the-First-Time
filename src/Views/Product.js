import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product(){
    const {id} = useParams()
    const url = `https://5f6545c0fb1b5700169c9ad2.mockapi.io/products/${id}`
    

    let content = null

    let product = useAxiosGet(url)
    
    if(product.error){
        content = <p>There was an error please refresh or try again latter</p>
    }

    if(product.loading){
        content = <Loader></Loader>
    }

    if(product.data){
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data['Name']}</h1>
            <div>
                <img
                    src={product.data['Image']}
                    alt={product.data['Name']} 
                />
            </div>
            <div className="font-bold text-xl mb-3">
                £{product.data['Price']}
            </div>
            <div>
                {product.data.['Description']}
            </div>
        </div>
    }
    return (
        <div>
                {content}
        </div>
    )
    
}
export default Product