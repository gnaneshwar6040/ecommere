import axios from "axios";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { useState } from "react";

function Products(){
    let [productData, setproductData] = useState({})
    let [usersData, setusersData] = useState({})

    async function getSingleProductData(){
        let apiResponse = await axios.get('https://dummyjson.com/products/14')
        setproductData(apiResponse.data)
        console.log(Object.keys(apiResponse.data))
    }

    async function getUsersData(){
        let apiResponse = await axios.get('https://dummyjson.com/users')
        setusersData(apiResponse.data.users)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header/>
                </div>
            </div>
             <div className="row mt-5 mb-5">

                <div className="col-12">
                    <button className="btn btn-primary" onClick={event => getSingleProductData()}>Read Single Product Data</button>
                </div>
                <div className="col-12">
                     
                            {
                                Object.keys(productData).length > 0 &&
                                <div>
                                    <div>Discount : {productData.discountPercentage} </div>
                            <div>Price : {productData.category} </div>
                            <div>StockAvailable : {productData.stock} </div>
                            <div>Rating : {productData.rating} <i className="bi bi-star"></i> </div>
                            <div>{productData.images.map( image => ( <img src={image} className="m-3" width="200"/> ))}</div>
                                </div>
                            }  
                </div>
            </div>


            <div className="col">
                     <div className="mt-5">
                          <button className="btn btn-success" onClick={event => getUsersData()}>Get Users Data</button>
                          
                    </div>       

                    
            </div>

             <div className="row">
                <div className="col-12">
                    <Footer/>
                </div>
            </div>

        </div>
    )
}

export default Products;