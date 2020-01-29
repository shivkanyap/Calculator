import React from 'react'
import ReactDOM from 'react-dom'
import * as math from 'mathjs'

class Table extends React.Component{

    
    render()
    {
    return(
    <div>
       
        <table border="1">
        
            <thead>
                
                </thead>

                <tbody>

                <tr>
                    <td><button onClick={()=>{
                        this.props.handleBtnclr('clr')}}>clr</button></td>
                    <td><button onClick={()=>{
                        this.props.handleBtnbck('bck')}}>bck</button></td>
                        <td>
                        <button onClick={()=>{
                        this.props.handleBtnclik('%')}}>%</button>
                        </td>
                        <td>
                        <button onClick={()=>{
                        this.props.handleBtnclik('*')}}>*</button>
                        </td>
                    
                </tr>


                   <tr>
                       <td>
                       <button onClick={()=>{
                        this.props.handleBtnclik(7)}}>7</button>
                       </td>
                       <td><button onClick={()=>{
                        this.props.handleBtnclik(8)}}>8</button></td>
                       <td><button onClick={()=>{
                        this.props.handleBtnclik(9)}}>9</button></td>
                       <td>
                       <button onClick={()=>{
                        this.props.handleBtnclik('-')}}>-</button></td>
                   </tr>

                   <tr>
                       <td><button onClick={()=>{
                        this.props.handleBtnclik(4)}}>4</button></td>
                       <td><button onClick={()=>{
                        this.props.handleBtnclik(5)}}>5</button></td>
                       <td><button onClick={()=>{
                        this.props.handleBtnclik(6)}}>6</button></td>
                       <td><button onClick={()=>{
                        this.props.handleBtnclik('+')}}>+</button></td>
                   </tr>
                   <tr>
                       <td><button onClick={()=>{
                        this.props.handleBtnclik(1)}}>1</button></td>
                       <td>
                       <button onClick={()=>{
                        this.props.handleBtnclik(2)}}>2</button>
                       </td>
                       <td><button onClick={()=>{
                        this.props.handleBtnclik(3)}}>3</button></td>
                       <td>
                       <button onClick={()=>{
                        this.props.handleBtnEqual('=')}}>=</button>
                           </td>
                    </tr>
                    <tr>
                        <td>
                        <button onClick={()=>{
                        this.props.handleBtnclik('/')}}>/</button>
                        </td>
                        <td>
                        <button onClick={()=>{
                        this.props.handleBtnclik(0)}}>0</button>
                        </td>
                        <td>
                        <button onClick={()=>{
                        this.props.handleBtnclik('.')}}>.</button>
                        </td>
                        <td> 
                        <button onClick={()=>{
                        this.props.handleBtnrst('rst')}}>rst</button>
                         </td>

                    </tr>
                    





                </tbody>

        </table>
        {/* {console.log(math.eval('1+2*5/2'))} */}
        </div>
    )

}
}
export default Table