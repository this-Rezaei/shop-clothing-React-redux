import React from "react";
import Header from "./Containers/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductList from "./Containers/ProductList";
import ProductDetals from "./Containers/ProductDetals";
function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={ProductList} />
                    <Route
                        path="/product/:productId"
                        exact
                        component={ProductDetals}
                    />
                    <Route>404 Not Found!</Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
