import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cart";

function Product({goud, updateCart}){
    let dispatch = useDispatch()

    function addToCart(){
        dispatch(addItem(goud))
    }

    function removeFromCart(){
        dispatch(removeItem(""))
    }

    return(
           
                <div className="col-lg-3" >
                      <div className="card shadow mt-3 mb-3" >
                         <img src={goud.thumbnail} className="card-img-top" width="50"/>
                       <div className="card-body">
                         <h4>{goud.title}</h4>
                          <p>{goud.description}</p>
                       <div>
                          <i className="bi bi-currency-rupee"></i>{goud.price}
                      </div>    
                    </div>
                    /<div className="card-footer">
                        <button className="btn btn-primary me-4" onClick={event => addToCart()}>Add to card</button>
                        <button className="btn btn-danger" onClick={event => removeFromCart()}>Remove</button>
                    </div>
                 </div>
                
                
            </div>
          
    )
}
export default Product;