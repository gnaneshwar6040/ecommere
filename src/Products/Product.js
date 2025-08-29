function Product({goud, updateCart}){
    console.log(goud)

    function addToCart(){
        updateCart()
    }

    return(
           
                <div className="col-3" >
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
                        <button className="btn btn-primary" onClick={event => addToCart()}>Add to card</button>
                    </div>
                 </div>
                
                
            </div>
          
    )
}
export default Product;