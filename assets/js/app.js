import React from "react"
import ReactDOM from "react-dom"
import {AppRouter} from "./AppRouter"
import {ToastContainer} from "react-toastify";

ReactDOM.render(
        <div>
            <ToastContainer />
            <AppRouter />
        </div>
, document.getElementById('root'))
