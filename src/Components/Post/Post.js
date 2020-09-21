import React, {Component} from 'react'

export default class Post extends Component{
    constructor(){
        super()
        this.state = {
        title: '',
        img: '',
        content: '',
        author: '',
        authorPicture: ''
        }
    }

    getPostInfo = () => {

    }


    render(){
        return(
            <div>
                Post
                <div>
                
                    <button>Delete</button>

                    {/* code below makes Post.js render on dashboard? 🤔 */}
                    {/* {this.props.post.content} */}
                    
                </div>
            </div>
        )
    }
}