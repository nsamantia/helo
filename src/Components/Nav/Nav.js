import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const Nav = (props) => {
    return(
        
        <div>
            {console.log(props)}
           <div className="navbar">
           <img src={props.profile} />
           <p> {props.profile}</p>
               <p></p>
              
            <ul>
            <li>{props.username}</li>
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