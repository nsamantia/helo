import React, {Component} from 'react'

export default class Form extends Component{
    constructor(){
        super()
        this.state = {
        title: '',
        img: '',
        content: '',
     }
    }   

    handleSubmitNewPost = () => {

    }

    render(){
        return (
            <div>
                Form
            </div>
        )
    }

}