import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import TalkToUsForm from "./TalkToUsForm";

function Home(){

    var HomePageMessage = "Text is dispalyed by Gnani Goud"
    return(
        <div className="container">
            <div className="row">
                
                    <div className="col-12"> 
                        <Header/>
                    </div>

                    <div className="col-lg-6 pt-5">
                        <h1>Dream software job in 6 months</h1>
                        <p>Learn in demand carrer paths from industry experts and become job ready</p>
                    </div>
                    <div className="col-lg-6 pt-5">
                        <TalkToUsForm message={HomePageMessage}/>
                    </div>

                    <div className="col-12">
                        <Footer/>
                    </div>

                

            </div>

        </div>
    )
}

export default Home;