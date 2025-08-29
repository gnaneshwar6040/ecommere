import { useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import axios from "axios";
import Product from "./Product";

function ProductsList(){

    let [products , setproducts]=useState([])
    let [noOfCartItems , setnoOfCartItems] = useState(0)

    function updateCart(){
        setnoOfCartItems(noOfCartItems++)
    }

    useEffect( () => {
        async function getProductsList(){
            let apiResponse = await axios.get("https://dummyjson.com/products")
            let data = apiResponse.data.products.map( product =>{
                product.is_fav = false
            return product} )
            setproducts(data)
             
        }
        getProductsList();

    },[])

    function handlefav(data){
        let tempData = products.map( product =>{
            if(product.id==data.id)
            {
                if(data.is_fav == false){
                    product.is_fav = true
                }
                else{
                    product.is_fav = false
                }
            }
            return product
        })
        setproducts(tempData)
       

    }

    return(

        <div className="container">
            <div className="row">
                <div className="col-12">
                   <Header/>
                </div>
            </div>

             <div className="row mt-5 mb-5 ">
               <div className="col-12">
                 {
                   <h4>Cart :{noOfCartItems} items</h4>
                 }
               </div>
                {
                    products.map( product => (
                       <Product goud ={product} updateCart ={updateCart}/>
                    ))
                }
             

             </div>
           
              

             <div className="row">
                <div className="col-12">
                  <Footer/>
                </div>
            </div>


        </div>
    )
}

export default ProductsList;