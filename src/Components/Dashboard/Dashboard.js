import React, {Component} from 'react'

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
     }

        getAllPosts = ()=> {

        }
        
        resetSearch = () => {

        }

        render(){

            const mappedPosts = this.state.posts.map((post, index) => {
                return(
                <div key = {index} >
                  <p>post = {post}</p>
                </div>
                )
                
            })
        
            return(
                <div className = "dashboard">
                    <div className="dash-head">
                    <input type='text' placeholder='search' />
                    <p>My Posts</p>
                    <input type='checkbox' id="posts" name="posts"/>
                    </div>
                    <div>
                        <p >{mappedPosts.post}</p>
                    </div>

                </div>

            )
        }
    
}