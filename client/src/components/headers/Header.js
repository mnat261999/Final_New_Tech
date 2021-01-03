import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'
function Header(){
    const state = useContext(GlobalState)
    console.log(state)
    const auth = useSelector(state => state.auth)
    const {user, isLogged} = auth
    const [isLoggin] = state.userAPI.isLoggin
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart

    
    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return <li className="drop-nav">
            <Link to="#" className="nav-link avatar">
            <img src={user.avatar} alt=""/> {user.name} <i className="fas fa-angle-down"></i>
            </Link>
            <div className="dropdown">
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={handleLogout}>Logout</Link>
            </div>
        </li>
    }

    const adminRouter = () =>{
        return(
            <>
                <li ><Link class="nav-link" to="/create_product">Create Product</Link></li>
                <li ><Link class="nav-link" to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link class="nav-link" to="/history">History</Link></li>
            </>
        )
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
            <div className="menu">
                <img src={Menu} alt="" width="30"/>
            </div>
                <Link class="navbar-brand"  to="/">{isAdmin ? 'Admin' : 'PT Shop'}</Link>

            <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
            <ul class="navbar-nav m-auto">
                <li className="nav-item"><Link class="nav-link" to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLoggin ? loggedRouter() : ''
                }
                
{/*                 {
                    isLogged
                    ? userLink()
                    :<li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                } */}

                <li className="nav-item">
                    <img src={Close} alt="" width="30" className="menu"/>
                </li>
            </ul>
            
            </div>

            <div class="form-inline my-2 my-lg-0">
                <ul class="navbar-nav m-auto">
                {isAdmin}

{
    isLoggin ? userLink() :  <li><Link class="nav-link" to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
}
                </ul>
            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span class="badge badge-light">{cart.length}</span>
                   {/*  <span>{cart.length}</span> */}
                    <Link class="btn btn-success btn-sm ml-3" to="/cart">
                        <i class="fa fa-shopping-cart"></i> Cart
                    </Link>
                </div>
            }
            </div>
            </div>
        </nav>
    )
}
export default Header