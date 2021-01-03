import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useSelector} from 'react-redux'
import "aos/dist/aos.css"

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const token = useSelector(state => state.token)
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth

    useEffect(() =>{
        if(token){
            const getHistory = async () =>{
                if(isAdmin)
                {
                    const res = await axios.get('/api/payment', {
                        headers: {Authorization: token}
                    })
                    console.log("test-history:"+ res)
 
                     setHistory(res.data)
                }
                else{
                    const res = await axios.get('/user/history', {
                        headers: {Authorization: token}
                    })
                    console.log("test-history:"+ res)
 
                     setHistory(res.data)
                    //res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false) 

                    //setCart(res.data.cart) 
                }
            }

            getHistory()
                }

    },[token, isAdmin, setHistory])

    return (
        <div className="container history-page mt-3 mb-3">
            <h2>History</h2>

            <h4>You have {history.length} ordered</h4>

            <table data-aos="fade-right">
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Date of Purchased</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    history.map(items => (
                        <tr key={items._id}>
                            <td>{items.paymentID}</td>
                            <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                            <td><Link to={`/history/${items._id}`}>View</Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory
