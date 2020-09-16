import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Nav/Nav'


 class Auth extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

        handleInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }


        handleLogin = () => {
            const {username, password} = this.state
            axios.post('/api/auth/login', {username, password})
            .then((res) => {
                this.setState(res.data)
                this.props.history.push('/Dashboard/Dashboard')
            })
            .catch((err) => {
                console.log(err)
            })

        }

        handleRegister = () => {
            const {username, password} = this.state
            axios.post(`/api/auth/register`, {username, password})
            .then((res) => {
                this.setState(res.data)
                this.props.history.push('/Dashboard/Dashboard')
            })
            .catch((err) => {
                console.log(err)
            })
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
                
                    <div>
                        <input placeholder="Username" name="username" onChange ={(e) => {this.handleInput(e)}}/>
                        <input placeholder="Password" name="password" onChange={(e) => {this.handleInput(e)}}/>
                    </div>
                    <div>
                        <button onClick={() => {this.handleLogin()}}>Login</button>
                        <button onClick={() => {this.handleRegister()}}>Register</button>
                    </div>
                        Auth

                </div>
            )

        }

}
export default withRouter (Auth)