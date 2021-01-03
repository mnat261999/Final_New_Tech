import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_mbt jumbotron text-center">
            <div className="container">
            <div className="row">
                <div class="col-custom col filter_display">
                <span>Filters: </span>
                <select class="form-control-custom form-control" name="category" value={category} onChange={handleCategory} >
                    <option value=''>All Products</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
                </div>

                <div class="col-6 dp-n-col-6">
                <input class="form-control-custom form-control" type="text" value={search} placeholder="Enter your search!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />
                </div>

                <div class="col-custom col filter_display">

                <span>Sort: </span>
                <select class="form-control-custom-sort form-control-custom form-control" value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option>
                    <option value='sort=-price'>Price: High-Low</option>
                    <option value='sort=price'>Price: Low-High</option>
                </select>
                </div>

                <div class="dp-n col-custom col">
                <input class="form-control-custom form-control-custom-search form-control" type="text" value={search} placeholder="Enter your search!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />
                </div>

            </div>
            </div>
        </div>
    )
}

export default Filters