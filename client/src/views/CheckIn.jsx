import React from 'react'
import Login from './../components/Login'
import Register from './../components/Register';
function CheckIn() {
    return (
        <div className="row" >
            <div className="col-6">
                <Register/>
            </div>
            <div className="col-6">
                <Login/>
            </div>
        </div>
    )
}

export default CheckIn
