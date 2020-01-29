import React from'react'
// import Tabledata from nnumberTabel
import ReactDOM from 'react-dom'
import Table from './Number-table';
// import css from './ticket-master/AppColour.css'
import * as math from 'mathjs'

import css from './App.css'
class Calculator extends React.Component
{
    constructor()
    {
        super()
        this.state={
            currentval:'',
            result:'',
            expression:''
        }
    }
    handleBtnclik=(value)=>{
        this.setState((prevState)=>({
            expression:prevState.expression+value

        }))
    }
    handleBtnEqual=(value)=>{
        try{
        const output=math.eval(this.state.expression)
        this.setState(()=>({
            result:output
        }))
    }catch(err)
    {
        alert('wrong input')
        this.setState(()=>({
            expression:''
        }))
    }

    }
    handleBtnclr=(value)=>{
        this.setState(()=>({
            result:'',
            expression:''
        }))
    }
    handleBtnbck=(value)=>{
        const oneback=this.state.expression.length
        this.setState((prevState)=>({
            expression:prevState.expression.slice(0,(oneback-1))
        }))


    }
        
        
    
    render()
    {
        
        return(
            
          
            
            <div>
                <h1><b>Calculator</b></h1>
                <h2>{this.state.expression}</h2>
                <h2>{this.state.result}</h2>
            <Table handleBtnclik={this.handleBtnclik}  handleBtnEqual={this.handleBtnEqual}  
            handleBtnclr={this.handleBtnclr}
            handleBtnbck={this.handleBtnbck}/>
            {console.log(this.state.expression)}
            {console.log(this.state.result)}
           

            </div>
        )
    }
}
export default Calculator