import React from "react"

import { Switch, BrowserRouter, Route } from "react-router-dom"

import Me from "./views/Me";
import Projects from "./views/Projects";
import Blog from "./views/Blog";
import Navbar from "./components/Navbar";
import Homepage from "./views/Homepage.jsx";

export const AppRouter = () => (
    <BrowserRouter>
        <Navbar />
        <div>
            <Switch>
                <Route path="/me" component={Me} />
                <Route path="/projects" component={Projects} />
                <Route path="/blog" component={Blog} />
                <Route path="/" component={Homepage} />
            </Switch>
        </div>
    </BrowserRouter>
)