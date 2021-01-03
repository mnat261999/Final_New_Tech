import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import {useSelector} from 'react-redux'
import axios from 'axios'
import Loading from '../utils/loading/Loading'
import Filters from './Filters'
import LoadMore from './LoadMore'
function Products(){
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const auth = useSelector(state => state.auth)
    const {isAdmin} = auth
    const token = useSelector(state => state.token)
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
    console.log(state)

    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy_admin', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }

    if(loading) return <div><Loading /></div>

    return (
        <>
                <Filters />
        
        {
            isAdmin && 
            <div className="container delete-all">
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button class="btn btn-danger" onClick={deleteAll}>Delete ALL</button>
            </div>
        }

        <div>
        <div class="card-border card">
            <div class="container card-header_border card-header bg-primary text-white text-uppercase mt-3">
                <div>
                    <i class="fa fa-star"></i> Products
                </div>
                
            </div>
            <div class="card-body">
            <div className="container">
            <div class="row-dp row">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}
                    isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                })
            }
            </div>
            </div>


            </div>
        </div>
        </div>


        <LoadMore />
        {products.length === 0 && <Loading />}
        </>
    )
}
export default Products