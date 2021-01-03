import React, { useEffect } from 'react'
//import {Link} from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"
import BtnRender from './BtnRender'

function ProductItem({product, isAdmin, deleteProduct, handleCheck}){
    useEffect(()=>{
        Aos.init({duration: 2000}); 
    })
    return (
        <div data-aos="fade-right" className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            <img src={product.images.url} alt="" />
            <div className="col-custom col">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>
            <BtnRender product={product} deleteProduct={deleteProduct} />
{/*             <div className="row_btn">
                <Link id="btn_buy" to="#!">
                    Buy
                </Link>
                <Link id="btn_view" to={`detail/${product._id}`}>
                    View
                </Link>
            </div> */}
        </div>
        
    )
}
export default ProductItem