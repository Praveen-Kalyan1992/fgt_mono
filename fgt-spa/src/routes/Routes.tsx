import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";
import Partners from "../pages/Landing/Partners/Partners";
const Routes = () => {
    return (<Router>
        <Header />
        <Switch>
            <Route path="/our-partner">
                <Partners />
            </Route>
            <Route path="/our-story">
                {/* <OurStory /> */}
            </Route>
            <Route path="/robotics">
                {/* <Robotics /> */}
            </Route>
            <Route path="/conference">
                {/* <Conference /> */}
            </Route>
            <Route path="/">
                <Landing />
            </Route>
        </Switch>
        <Footer />
    </Router>);
}
export default Routes;