import axios from 'axios'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
     }

        getAllPosts = ()=> {
            axios.get('/api/posts').then((res) => {
                this.setState ({
                    posts: res.data
                })
            })

        }
        
        resetSearch = () => {

        }

        render(){

            const mappedPosts = this.state.posts.map((post) => {
                return(
                <p>{post}</p>
                  
                  

                  
               
                )
                
            })
        
            return(
                <div className = "dashboard">
                    <div className="dash-head">
                        
                    <input type='text' placeholder='search' />
                    <button>Search</button>
                    <button>Reset</button>
                    <p>My Posts</p>
                    <input type='checkbox' id="posts" name="posts"/>
                    </div>
                    <div>
                        <p>{mappedPosts.post}</p>
                        
                        {this.posts}
                        <p>{mappedPosts.title}</p>
                        <p>{mappedPosts.conetnt}</p>
                        <p>{this.getAllPosts()}</p>
                        <p>{this.post}</p>
                    </div>

                </div>

            )
        }
    
}
const mapStateToProps = (reduxState) => {
    return{userId: reduxState.userId.userId}
}
export default connect(mapStateToProps)(withRouter(Dashboard))