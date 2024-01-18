import Styles from "./userslist.module.css"
import { userSelector,setCurrentConversation } from "../features/counter/usersReducer"
import { useDispatch, useSelector } from "react-redux";
import profile from "../data/profile/profile.png"
import addContact from "../images/add_contact.png"
import search from "../images/search_contact.png"
import { toggleAddContact,clearSearchResults } from "../features/counter/usersReducer";
import { searchContact } from "../features/counter/usersReducer";
import { useRef } from "react";

function useValue(){

    const value = useSelector(userSelector);

    return value;

}

export function UsersList(){

    const dispatch = useDispatch();

    const clearSearchInput=useRef();

    const {users,searchResults}=useValue();


    function clearSearch(){

        dispatch(clearSearchResults())

        clearSearchInput.current.value=""

    }

    return(

        <>

            <div className={Styles.userslist}>

                <div  class={Styles.formdiv}>
                    
                    <img src={search} className={Styles.searchcontact}/>

                    <input class={Styles.searchbox}
                        onChange={(e)=>dispatch(searchContact(e.target.value))}
                        ref={clearSearchInput}
                        type="text"
                        placeholder="Search contact..."
                    />

                    <button class={Styles.searchbtn}
                            onClick={clearSearch}
                    > Clear </button>

                    <img src={addContact}
                         onClick={()=>dispatch(toggleAddContact())}
                         className={Styles.addcontact}
                    />

                </div>

                {
                    searchResults.length>0?
                        searchResults.map((friend,index)=>(
                            <div className={Styles.user}
                                 onClick={()=>(dispatch(setCurrentConversation([friend])))}
                            >
                                <img src={profile} alt="profile"/>
                                <div className={Styles.searchshortdetails}>
                                    <h3>{friend.name}</h3>
                                </div>
                            </div>
                        ))
                        :
                        users.map((person,index)=>(
                            <div className={Styles.user}
                                 onClick={()=>(dispatch(setCurrentConversation([person])))}
                            >
                                <img src={profile} alt="profile"/>
                                <div className={Styles.shortdetails}>
                                    <h3>{person.name}</h3>
                                    <p>
                                        { person.convo.length>1?
                                            Object.values(person.convo[person.convo.length-1])[0]
                                            :
                                            "No message yet!!!"
                                        }
                                    </p>
                                </div>
                                <h6 className={Styles.lastseen}>{person.lastSeen}</h6>
                            </div>
                        ))
                }
            </div>

        </>
    )
} 