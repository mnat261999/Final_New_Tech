import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import './footer.css'

function Footer() {
    const state = useContext(GlobalState)
    return (
        <>
       <div class="container-fluid justify-content-center px-0 bg-dark text-light">
    <footer>
        <div class="row justify-content-around mb-0 pt-5 mx-4">
            <div class="col-xl-2 col-md-4 order-xl-1 order-4 mr-xl-0 my-auto">
            <h5>About</h5>
                <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <p class="mb-0">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                </p>
            </div>
            <div class="col-xl-2 col-md-3 pt-4 order-1">
                <h5>Informations</h5>
                <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <ul class="list-unstyled">
                <li><a href="">Link 1</a></li>
                    <li><a href="">Link 2</a></li>
                    <li><a href="">Link 3</a></li>
                    <li><a href="">Link 4</a></li>
                </ul>
            </div>
            <div class="col-xl-2 col-md-3 pt-4 order-2">
                <h5>Others links</h5>
                <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <ul class="list-unstyled">
                <li><a href="">Link 1</a></li>
                    <li><a href="">Link 2</a></li>
                    <li><a href="">Link 3</a></li>
                    <li><a href="">Link 4</a></li>
                </ul>
            </div>
            <div class="col-xl-auto col-md-3 pt-4 my-sm-0 order-md-3 order-sm-1 ">
                <h5>Contact</h5>
                <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <ul class="list-unstyled">
                    <li><i class="fa fa-home mr-2"></i> My company</li>
                    <li><i class="fa fa-envelope mr-2"></i>thu261999@gmail.com</li>
                    <li><i class="fa fa-phone mr-2"></i>0902948267</li>
                </ul>
            </div>
        </div>
        <div class="row justify-content-center px-3 py-3 pt-5">
        </div>
    </footer>
</div>

        </>
    )
}

export default Footer