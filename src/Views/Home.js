import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home(){
    let content = null
    const url = `https://5f6545c0fb1b5700169c9ad2.mockapi.io/products?page=1&limit=10`
    
    let products = useAxiosGet(url)

    if(products.error){
        content = <p>There was an error please refresh or try again latter</p>
    }

    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content = 
        products.data.map((product)=>
            <div key={product.id}>
                <ProductCard
                    product={product}
                >

                </ProductCard>
            </div>
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2x">Best Sellers</h1>
            {content}
        </div>
    )
}

export default Home