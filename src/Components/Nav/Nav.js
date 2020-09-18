import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const Nav = (props) => {
    return(
        
        <div>
            {console.log(props)}
           <div className="navbar">
               <p>Hi,{props.username.username}</p>
               <img src={props.profile.profile} />
            <ul>
           <li ><Link to="/dashboard" ><img className="home-img" src ="https://github.com/DevMountain/simulation-3/blob/master/assets/home_logo.png?raw=true"/></Link></li>
           <li><Link to="/new"><img className="post-img"  src ="https://github.com/DevMountain/simulation-3/blob/master/assets/new_logo.png?raw=true"/></Link></li>
           <li><Link to="/"><img className="logout-img"  src ="https://github.com/DevMountain/simulation-3/blob/master/assets/shut_down.png?raw=true"/></Link></li>
           </ul>
           </div>
        </div>
    )

    
}
const mapStateToProps = (reduxState) => {
    return{username: reduxState.username.username, profile: reduxState.profile.profile}
}
export default connect(mapStateToProps)(withRouter(Nav))