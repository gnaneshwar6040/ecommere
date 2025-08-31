
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import { faArrowUpFromBracket, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

function Icons(){

    return(
        <div className="container">
               <div className="col-12"> 
                        <Header/>
                    </div>

                    <div className="col-6 pt-5">
                        <h1>Welcome to Icons Page</h1>
                        <div className="mb-3">
                            {/* FontAwesomeIcon faArrowUpFromBracket faYoutube */}
                            share : <FontAwesomeIcon icon={faArrowUpFromBracket}  className="text-primary"/>
                        </div>
                        <div className="mb-3">
                            Youtube : <FontAwesomeIcon icon={faYoutube} className="text-danger"/>
                        </div>
                        <div className="mb-3">
                            Instagram : <FontAwesomeIcon icon={faInstagram}  className="text-danger"/>
                        </div>
                        <div className="mb-3">
                            Delete File : <FontAwesomeIcon icon={faTrashCan}  />
                        </div>
                        
                        
                    </div>
                  

                    <div className="col-12">
                        <Footer/>
                    </div>

        </div>
    )

}

export default Icons