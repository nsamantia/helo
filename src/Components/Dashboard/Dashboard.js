import axios from 'axios'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter } from 'react-router-dom'
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

        handleDelte = (postId) => {
            axios.delete(`/api/posts/${postId}`).then((res) => {
                this.setState({
                    posts: res.data
                })
            })
        }

        render(){

          
        
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
                    {/* {this.post.content} */}
                    </div>
                {
                    this.state.posts.map((post, index) => {
                        return(
                                
                                <div>
                                    <Post 
                    
                                post = {post}
                                key ={post.id}   
                                  />
                            <div className = 'post-div'>
                               {/* <Link to="/Post/"> */}
                                {post.title} 
                                {post.content}
                                <button onClick={() => {this.handleDelte(post.id)}}>Delete</button>
                                {/* </Link>  */}
                            </div>
                                
                                </div>
                                
                                
                                
                        )
                        
                    })
                }
                    

                </div>

            )
        }
    
}
const mapStateToProps = (reduxState) => {
    return{userId: reduxState.userId.userId}
}
export default connect(mapStateToProps)(withRouter(Dashboard))