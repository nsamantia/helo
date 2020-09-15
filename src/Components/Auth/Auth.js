import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Nav from '../Nav/Nav'


 class Auth extends Component{
    constructor(){
        super()
        this.state = {
            usernamee: '',
            password: ''
        }
    }

        handleLogin = (e) => {

        }

        handleRegister = (e) => {

        }
    //     handleNav =() => {
    //     if(this.props.location.path = '/'){

    //     } else{
    //      return(<Nav />)
    //     }
    // }
        
        render(){
            return(
                <div>
                {/* {this.props.location.pathname !== "/" && <Nav />} */}
                
                    Auth
                </div>
            )

        }

}
export default withRouter(Auth)