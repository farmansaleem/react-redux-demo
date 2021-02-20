import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import ProductDetails from "../components/ProductDetails"
const useStyles = makeStyles(theme => ({
    container: {
        minHeight: "91vh",
        background: "linear-gradient(to right top, #65dfc9, #6cdbeb)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",


    },
    card: {
        background: "white",
        minHeight: "80vh",
        width: "60%",
        background: "linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))",
        borderRadius: "2rem",
        zIndex: 2,
        backdropFilter: "blur(2rem)",
        padding: "20px"

    }
    ,
}))
const Cart = ({ data }) => {

    const classes = useStyles()
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.card}>
                    {data.length && data.map((item, idx) =>
                        <ProductDetails item={item} />
                    )
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        itemLength: state.cart.itemLength,
        data: state.cart.cart

    }
}


export default connect(
    mapStateToProps,
    null
)(Cart)
