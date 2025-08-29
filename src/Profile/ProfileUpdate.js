import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { useState } from 'react';
function ProfileUpdate(){
    let [profileFile, setprofileFile] = useState("")
    let [fileTypeError, setFileTypeError] = useState("")
    let [fileSizeError, setfileSizeError] = useState("")

    function handleFileChange(event){
        setprofileFile(event.target.files[0])

    }

function handleUploadFile(){
    let fileName = profileFile.name;
    let fileArray = fileName.split(".")
    let extension = fileArray[fileArray.length-1]
    
    if(extension == "png" || extension == "jpg"){
        setFileTypeError("")
    }
    else{
        setFileTypeError(extension+" "+"is not allowed")
    }

    let fileSize = profileFile.size / (1024*1024)
    if(fileSize <= 1){
        setfileSizeError("")
    }
    else{
        setfileSizeError("Maximum 1-MB only Allowed")
    }

}


    return(
        <div className="container">
            <div className="row">
                <Header/>
            </div>
            <div className='col-12 mt-5 mb-5'>
                <h4>Upload ProfilePic</h4>
                <div><input type='file' className='form-control' onChange={event => handleFileChange(event)}/></div>
            </div>
            <div className='col-12'>
                <button className='btn btn-primary' onClick={event => handleUploadFile()}>Upload File</button>
            </div>
            <div className='text-danger mt-2'>{fileTypeError}</div>
            <div className='text-danger mt-2'>{fileSizeError}</div> 
            <div className="row mt-5 mb-5">
                <Footer/>
            </div>

        </div>

    )
}
export default ProfileUpdate;