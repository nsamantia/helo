import axios from 'axios'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import Post from '../Post/Post'

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
     }

     componentDidMount() {
         this.getAllPosts()
         
     }


        getAllPosts = () => {
            axios.get(`/api/posts`).then((res) => {
                this.setState ({
                    posts: res.data
                })
                console.log(res.data)
            })
            .catch(err => console.log(err))

        }
        
        resetSearch = () => {

        }

        render(){

            const mappedPosts = this.state.posts.map((post, index) => {
                return(
                    <Post
                        post={post}
                        key={post.id}
                        />
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
                        <ul>{mappedPosts}</ul>
                        <p></p>
                    </div>
                
                    

                </div>

            )
        }
    
}
const mapStateToProps = (reduxState) => {
    return{userId: reduxState.userId.userId}
}
export default connect(mapStateToProps)(withRouter(Dashboard))