
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import { useEffect, useState } from "react"
import axios from "axios"
function UsersList(){
  
    let [users , setUsers] = useState([])
    let [usersData , setUsersData] =useState([])
    let searchText =" "
    let [name , setName] = useState("")
    let [gmail , setGmail] = useState("")
    let [gender , setGender] = useState("")
    let [age , setAge] = useState("")

    useEffect ( () => {

        async function usersList(){
            let apiResponse = await axios.get("https://dummyjson.com/users")
            setUsers([...apiResponse.data.users])
            setUsersData([...apiResponse.data.users])
            
        }
        usersList()
    },[]) // doubt clarified by Anji bro =>  ,[]

    function handleSearchTextChange(event){
        
        searchText = event.target.value
       let tempData =  usersData.filter( user =>  { return user.firstName.toLowerCase().includes(searchText.toLowerCase())})
       setUsers([...tempData])
    }
   
    function handleNameSort(){
        console.log(1)
     let tempData = users.sort( (user1,user2)=> {
        if(user1.firstName.toLowerCase() > user2.firstName.toLowerCase()){
            return -1
        }
        else{
            return 1
        }
       })
       setUsers([...tempData])
    }

   async function handleDelete(user){
        let apiResponse = await axios.delete('https://dummyjson.com/users/' + user.id)
        let tempData = users.filter (tempUser =>  user.id != tempUser.id )
        setUsers([...tempData])
    }

    function handleEditBtn(user){
        setAge(user.age)
        setGender(user.gender)
        setGmail(user.email)
        setName(user.firstName)

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
                    <input type="text" onChange={event => handleSearchTextChange(event)} className="form-control" placeholder="Search by Name"/>
                </div>

                <div className="row">  
                    <div className="col-8">
                    <table className="table table-striped table-hover">
                        <tr>
                            <th>Id</th> <th onClick={event => handleNameSort()}>Name</th> <th>Gmail</th> <th>Gender</th> <th>Age</th> <th>Actions</th>
                        </tr>
                        <tbody>
                            {
                                users.map( user => (
                                     <tr>
                                        <td>{user.id}</td>  <td>{user.firstName}</td> <td>{user.email}</td> <td>{user.gender}</td> <td>{user.age}</td>
                                        <td>
                                            <button className="btn btn-primary me-2" onClick={e => handleEditBtn(user)}>Edit</button>
                                            <button className="btn btn-danger" onClick={e => handleDelete(user)}>Delete</button>
                                        </td>
                                     </tr>
                                ))
                               
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-4">
                     <div className="mb-3"><input type="text" placeholder="Name" className="form-control" value={name}/></div>
                     <div className="mb-3"><input type="gmail" placeholder="gmail" className="form-control" value={gmail}/></div>
                     <div className="mb-3"><input type="gender" placeholder="gender" className="form-control" value={gender}/></div>
                     <div className="mb-3"><input type="age" placeholder="age" className="form-control" value={age}/></div>
                     <div className="btn btn-secondary">Update Info</div>
                </div>
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
export default UsersList