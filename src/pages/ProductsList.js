import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux'
import DataGridDemo from "../components/DataGridDemo"

const columns = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "productName", headerName: "Product Name", width: 200 },
    { field: "company", headerName: "Company", width: 130 },
    { field: "category", headerName: "Category", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "tax", headerName: "Tax", width: 130 },
    { field: "discount", headerName: "Discount", width: 130 },
    { field: "phone", headerName: "Phone No.", width: 200 },
];
const ProductsList = ({ productsData, fetchProducts, loading }) => {
    useEffect(() => {
        fetchProducts()
    }, [])

    return loading ? (
        <h2>Loading</h2>
    ) : productsData.error ? (
        <h2>{productsData.error}</h2>
    ) : (
                <div>
                    <h2>Product List</h2>
                    <div>
                        {productsData &&
                            <DataGridDemo columns={columns} rows={productsData} />

                        }
                    </div>
                </div>
            )
}

const mapStateToProps = state => {
    return {
        productsData: state.products.productsList,
        loading: state.products.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsList)