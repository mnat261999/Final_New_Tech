import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import ForgotPass from './auth/ForgotPassWord'
import ResetPass from './auth/ResetPassword'
import Profile from './profile/Profile'
import EditUser from './profile/EditUser'
import {useSelector} from 'react-redux'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

//import {GlobalState} from '../../GlobalState'

function Pages(){
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    //const state = useContext(GlobalState)
    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />
            <Route path="/forgot_password" exact component={isLogged ? NotFound : ForgotPass} />
            <Route path="/user/reset/:token" exact component={isLogged ? NotFound : ResetPass} />
            
            <Route path="/user/activate/:activation_token" exact component={ActivationEmail} />

            <Route path="/profile" component={isLogged ? Profile : NotFound} exact />

            <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />

            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />
            
            <Route path="/cart" exact component={Cart} />

            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}
export default Pages