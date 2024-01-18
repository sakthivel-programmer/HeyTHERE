import Styles from "./userslist.module.css"
import { userSelector,setCurrentConversation } from "../features/counter/usersReducer"
import { useDispatch, useSelector } from "react-redux";
import profile from "../data/profile/profile.png"
import addContact from "../images/add_contact.png"
import search from "../images/search_contact.png"
import { clearSearchResults } from "../features/counter/usersReducer";
import { searchContact } from "../features/counter/usersReducer";
import { useRef } from "react";
import { Link } from "react-router-dom";

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
                    
                    <img src={search} className={Styles.searchcontact} alt="seach_contact"/>

                    <input class={Styles.searchbox}
                        onChange={(e)=>dispatch(searchContact(e.target.value))}
                        ref={clearSearchInput}
                        type="text"
                        placeholder="Search contact..."
                    />

                    <button class={Styles.searchbtn}
                            onClick={clearSearch}
                    > Clear </button>

                    <Link to={"/addContact"}>
                        <img src={addContact}
                            className={Styles.addcontact}
                            alt="add_contact"
                        />
                    </Link>

                </div>

                {
                    searchResults.length>0?
                        searchResults.map((person,index)=>(
                            <Link to={`/friend/${person.name}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <div className={Styles.user}
                                    onClick={()=>(dispatch(setCurrentConversation([person])))}
                                    key={index}
                                >
                                    <img src={profile} alt="profile"/>
                                    <div className={Styles.searchshortdetails}>
                                        <h3>{person.name}</h3>
                                    </div>
                                </div>
                            </Link>

                        ))
                        :
                        users.map((person,index)=>(
                            <Link to={`/friend/${person.name}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <div className={Styles.user}
                                     onClick={()=>(dispatch(setCurrentConversation([person])))}
                                     key={index}
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
                            </Link>
                        ))
                }
            </div>

        </>
    )
} 