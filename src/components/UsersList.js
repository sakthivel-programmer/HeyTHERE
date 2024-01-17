import Styles from "./userslist.module.css"
import { userSelector,setCurrentConversation } from "../features/counter/usersReducer"
import { useDispatch, useSelector } from "react-redux";
import profile from "../data/profile/profile.png"
import addContact from "../images/add_contact.png"
import { toggleAddContact } from "../features/counter/usersReducer";

function useValue(){
    const value = useSelector(userSelector);
    return value;
}

export function UsersList(props){
    const dispatch = useDispatch();
    const {users}=useValue()
    
    return(
        <>
        <div className={Styles.userslist}>
            <form class={Styles.formdiv}>
                <input class={Styles.searchbox} type="search" placeholder="Search" aria-label="Search"/>
                <button class={Styles.searchbtn} type="submit">Search</button>
                <img src={addContact} onClick={()=>dispatch(toggleAddContact())}/>
            </form>

            {users.map((friend,index)=>(
                <div className={Styles.user} onClick={()=>(dispatch(setCurrentConversation([friend])))} >
                    <img src={profile} alt="profile"/>
                    <div className={Styles.shortdetails}>
                        <h3>{friend.name}</h3>
                        <p>{friend.convo.length>1?friend.convo[friend.convo.length-1].you:"No message yet!!!"}</p>
                    </div>
                    <h6 className={Styles.lastseen}>{friend.lastSeen}</h6>
                    
                
                </div>
            ))}
            
        </div>
        </>
    )
} 