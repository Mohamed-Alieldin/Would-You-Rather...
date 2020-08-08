import React from 'react'
import {Link} from 'react-router-dom'


const NotFound = (props) =>{

    return(
        <div className="center-align">
            <h1>404 - Not Found!</h1>
            <div className="section">

            
                <Link to="/">
                Go Home
                </Link>
                </div>
        </div>
    )
}


export default NotFound