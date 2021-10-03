import { Switch, Route } from "react-router-dom"
import { Login } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import Home from "../pages/Home"
import { CardProducts } from "../components/CardProducts"
import ProductContent from "../components/ProductContent"
import { Cart } from "../components/Cart"
import { FilteredProductsA } from "../pages/CategoryA"
import { FilteredProductsB } from "../pages/CategoryB"
import { FilteredProductsC } from "../pages/CategoryC"
import { FilteredProductsD } from "../pages/CategoryD"
import { InfoClient } from "../pages/InfoClient"
import { CepPage } from "../pages/CepPage"
import { Checkout } from "../pages/Checkout"


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/register">
                <RegisterPage />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route exact path="/products/:id">
                <ProductContent />
            </Route>

            <Route path="/cart">
                <Cart />
            </Route>

            <Route path="/filteredCatA">
                <FilteredProductsA />
            </Route>

            <Route path="/filteredCatB">
                <FilteredProductsB />
            </Route>

            <Route path="/filteredCatC">
                <FilteredProductsC />
            </Route>

            <Route path="/filteredCatD">
                <FilteredProductsD />
            </Route>

            <Route path="/infoClient">
                <InfoClient />
            </Route>

            <Route path="/cepClient">
                <CepPage />
            </Route>

            <Route path="/Checkout">
                <Checkout />
            </Route>

            <Route path="*">
                <CardProducts />
            </Route>
        </Switch>
    )
}