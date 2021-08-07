import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";
import Auth from "./components/Auth/Auth";
import Map from "./components/Map/Map"

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <BrowserRouter>
            
                <Navbar />
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/posts" />} />
                    <Route path="/posts" exact component={Home} />
                    <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
                    <Route path="/posts/:id" component={PostDetails} />
                    <Route path="/explore" exact component={Map} />
                </Switch>
            
        </BrowserRouter>
    );
}

export default App;