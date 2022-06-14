import React from "react";
import { Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

 export default function Router() {
    return (
        <switch>
            <Route exact path={["" , "/"]} component={Home} />
            <Route exact path="/sign-in" component={Signin} />
        </switch>
    )
}
