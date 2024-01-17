import { createSlice } from '@reduxjs/toolkit';
import { userData } from '../../data/users';

const initialState = {
  users:userData,
  toggleAddContact:false,
  showConversation:[userData[0]]
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addMessage: (state,action) => {
      // console.log(action.payload)
      state.users.map((friend)=>{
        if(friend.mobileNumber===state.showConversation[0].mobileNumber){
          friend.convo.push({you:action.payload})
          state.showConversation[0].convo.push({you:action.payload})
        }
        return friend
      })
    },
    toggleAddContact:(state,action)=>{
      state.toggleAddContact=!state.toggleAddContact
    }
    ,
    setCurrentConversation:(state,action)=>{
      const mobile_number=action.payload;
      state.showConversation=mobile_number;
      // console.log(state.users)
    },
    addContact:(state,action)=>{
      state.users.push({
        name:action.payload.contactName,
        mobileNumber:action.payload.contactNumber,
        status:"Available",
        convo:[],
        lastSeen:"12:00AM"
      })
      state.toggleAddContact=!state.toggleAddContact
    }
  }
});

export const { addMessage,setInitialState, setCurrentConversation,addContact,toggleAddContact } = usersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const userSelector = (state) => state.usersReducer;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export default usersSlice.reducer;
