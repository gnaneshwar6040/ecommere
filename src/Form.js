import { useState } from "react";

function Form(){

    var [course, setcourse]=useState("")
    var [gender, setgender]=useState("")
    var [avator,setavator]=useState("")
    var [bahubali,setbahubali]=useState("")
    var [coolie,setcoolie]=useState("")

    function handleCourse(event){
        setcourse(event.target.value)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h2 className="text-success">Form Data</h2>
                    <div>
                        <label>Courses</label>
                        <select className="form-select" onChange={event => handleCourse(event) }>
                            <option>ReactJS</option>
                            <option>ExpressJS</option>
                            <option>Data Science</option>
                            <option>Automation Testing</option>
                        </select>
                    </div> <br/>
                    <div>
                        <label>Gender</label>
                    </div>
                    <div>
                         <input className="form-check-input" type="radio" value="male" name="gender"/>
                         <label className="form-check-label" for="flexRadioDefault1">
                           Male
                         </label>
                    </div>
                    <div>
                         <input className="form-check-input" type="radio" value="Female" name="gender"/>
                         <label className="form-check-label" for="flexRadioDefault1">
                           Female
                         </label>
                    </div> <br/>
                    <div>
                        <label>Favourite Movies</label>
                    </div>
                    <div class="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label className="form-check-label" for="flexCheckIndeterminate">Avator</label>
                    </div>
                    <div class="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label className="form-check-label" for="flexCheckIndeterminate">Bhahubali</label>
                    </div>
                    <div class="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"  />
                      <label className="form-check-label" for="flexCheckIndeterminate">Coolie</label>
                    </div>
                    <div className="mt-3">
                        Course: {course} <br/>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Form;