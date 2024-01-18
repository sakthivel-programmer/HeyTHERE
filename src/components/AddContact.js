import Styles from "./addContact.module.css"
import profile from "../data/profile/profile.png"
import goBack from "../images/go_back.png"
import {useState} from "react";
import {useDispatch} from "react-redux"
import { addContact } from "../features/counter/usersReducer"
import { toggleAddContact } from "../features/counter/usersReducer";

const AddContact = (props) => {
  const [contactName,setContactName]=useState("")
  const [contactNumber,setContactNumber]=useState("")
  
  const dispatch = useDispatch()

  function handleSubmit(e){
    e.preventDefault();
    dispatch(addContact({
      contactName,
      contactNumber
    }))
  }

  return (
    <div className={Styles.body}>
        <div className={Styles.innerDiv}>
            <img src={goBack} className={Styles.goback} onClick={()=>dispatch(toggleAddContact())}/>
            <img src={profile} className={Styles.profile}/>
            <div className={Styles.formDiv}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" onChange={(e)=>setContactName(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <input type="text" placeholder="Mobile number" onChange={(e)=>setContactNumber(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <button>Add Contact</button>
                </form>
            </div>
        </div>
    </div>
  )
};

export default AddContact;