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
                </div>
            </div>
        )
    }
}