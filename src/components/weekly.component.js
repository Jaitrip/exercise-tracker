import React, { Component } from 'react';



import Navbar from './layout/Navbar'

export default class Weekly extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: '',
        }
        //recieves data from API Call via to feed into Chart
    }
    render(){
        return (
            <div>
            <Navbar />
                

            </div>
        )
    }
}

