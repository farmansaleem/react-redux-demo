import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        borderRadius: "20px",
        padding: "20px",
        marginBottom: "20px",
        display: "flex",
        flexWrap: "nowrap",
    },
    child: {
        textAlign: "center",
        margin: " 10px"
    }
});

const ProductDetails = ({ item: { id, price, discount, productName } }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.child}>{id}</div>
            <div className={classes.child}> {price}</div>
            <div className={classes.child}>
                {discount}
            </div>
            <div className={classes.child}>
                {productName}
            </div>
        </Card>
    );
}

export default ProductDetails;