import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';


import Navbar from './layout/Navbar'

export default class Weekly extends Component {
    constructor(props){
        super(props);
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

