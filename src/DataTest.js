import { useState } from "react"
import Footer from "./Shared/Footer"
import Header from "./Shared/Header"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./store/counter"

function DataTest(){


   let count = useSelector(state => state.counter)
   let dispatch = useDispatch()

    function handleIncrement(){
        dispatch(increment(""))
    }

    function handleDecrement(){
        dispatch(decrement(""))
    }


   
    return (
          <div className="container">
               <div className="col-12"> 
                        <Header/>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-12"> 
                            <h1>Counters</h1>
                            {
                                <h1>{count}</h1>
                            }
                            <button className="btn btn-success me-3" onClick={e => handleIncrement()} >+</button>
                            <button className="btn btn-danger" onClick={e => handleDecrement()}>-</button>
                        </div>
                    </div>
                    <div className="col-12">
                        <Footer/>
                    </div>

        </div>
    )
}
export default DataTest