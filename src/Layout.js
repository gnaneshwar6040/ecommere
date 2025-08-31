import Footer from "./Shared/Footer"
import Header from "./Shared/Header"

function Layout(){
    return(
                <div className="container">
                    <div className="row"> 
                        {/* <Header/> */}
                    </div>
                    <div className="row">
                        <div className="col-sm-3 bg-primary">
                            <div className="m-5">
                                <h1>Coding is easy and fun and practice everyday</h1>
                            </div>
                        </div>
                        <div className="col-sm-3 bg-success">
                            <div className="m-5">
                                <h1>Coding is easy and fun and practice everyday</h1>
                            </div>
                        </div> 
                        <div className="col-sm-3 bg-warning">
                            <div className="m-5">
                                <h1>Coding is easy and fun and practice everyday</h1>
                            </div>
                        </div>            
                    </div>
                    <div className="col-12">
                        {/* <Footer/> */}
                    </div>

                

            

        </div>
    )
}
export default Layout