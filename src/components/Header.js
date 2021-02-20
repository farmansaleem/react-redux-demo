import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { connect } from 'react-redux'


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',

    },
}))

const Header = ({ itemLength }) => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Link to={"/products"}>
                    <IconButton>
                        <HomeOutlinedIcon fontSize="small" />
                    </IconButton>
                </Link>
                <Grid container
                    alignItems="center">
                    <Grid item>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <Link to={"/cart"}>
                            <IconButton>
                                <Badge badgeContent={itemLength} color="primary">
                                    <ShoppingCartOutlinedIcon fontSize="small" />
                                </Badge>
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = state => {
    return {
        itemLength: state.cart.itemLength
    }
}
export default connect(
    mapStateToProps,
    null
)(Header)
