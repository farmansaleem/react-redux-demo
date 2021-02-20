import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "../pages/Cart";
import ProductsList from "../pages/ProductsList";
import NotFound from "../components/NotFound";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={ProductsList} />
            <Route path="/products" component={ProductsList} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
        </Switch>
    );
}
export default Routes