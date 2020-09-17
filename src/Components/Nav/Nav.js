import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <div>
           <div className="navbar">
            <ul>
           <li ><Link to="/dashboard" ><img className="home-img" src ="https://github.com/DevMountain/simulation-3/blob/master/assets/home_logo.png?raw=true"/></Link></li>
           <li><Link to="/new"><img className="post-img"  src ="https://github.com/DevMountain/simulation-3/blob/master/assets/new_logo.png?raw=true"/></Link></li>
           <li><Link to="/"><img className="logout-img"  src ="https://github.com/DevMountain/simulation-3/blob/master/assets/shut_down.png?raw=true"/></Link></li>
           </ul>
           </div>
        </div>
    )
}

export default Nav