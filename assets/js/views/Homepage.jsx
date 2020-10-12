import React, {Component} from 'react'
import NavLink, {BrowserRouter} from "react-router-dom";

class Homepage extends Component {
    render() {
        return (
            <>
                Homepage
                <BrowserRouter>
                    <NavLink to="/about">About</NavLink>
                </BrowserRouter>

            </>
        )
    }
}

export default Homepage