import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {getInfo} from '../../ducks/reducer'
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
                // this.setState(res.data)
                this.props.getInfo(res.data)
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
                // this.setState(res.data)
                this.props.getInfo(res.data)
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
                <div className= "auth">
                {/* {this.props.location.pathname !== "/" && <Nav />} */}
                <img src ="https://github.com/DevMountain/simulation-3/blob/master/assets/helo_logo.png?raw=true" />
                <h1 className="helo-h1">Helo</h1>
                    <div className="input-container">
                       <label className="user-pass-p">Username:</label>
                        <input className="user-pass-input" name="username" onChange ={(e) => {this.handleInput(e)}}/>
                        <label className="user-pass-p">Password:</label>
                        <input className="user-pass-input" name="password" onChange={(e) => {this.handleInput(e)}}/>
                    </div>
                    <div className = "button-container">
                        <button className="login-reg-buttons" onClick={() => {this.handleLogin()}}>Login</button>
                        <button className="login-reg-buttons" onClick={() => {this.handleRegister()}}>Register</button>
                    </div>
                        

                </div>
            )

        }

}
export default connect(null, {getInfo}) (Auth) 