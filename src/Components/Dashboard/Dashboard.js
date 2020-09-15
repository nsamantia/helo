import React, {Component} from 'react'

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            posts: [],
            seatch: '',
            userposts: true
        }
     }

        getAllPosts = ()=> {

        }
        
        resetSearch = () => {

        }

        render(){
            return(
                <div>
                    Dashboard
                </div>

            )
        }
    
}