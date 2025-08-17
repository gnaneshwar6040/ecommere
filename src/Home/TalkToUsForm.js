function TalkToUsForm({message}){
    return(
        <div>
            <div className="text-danger"><h2>{message}</h2></div>
            <div className="mt-3">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter your Name"/>
            </div >
            <div className="mt-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter your Email"/>
            </div>
            <div className="mt-3">
                <button className="btn btn-primary">Send</button>
            </div>
        </div>
    )
}

export default TalkToUsForm;