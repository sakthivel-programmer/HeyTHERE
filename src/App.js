import './App.css';
import { Navbar } from './components/Navbar';
import { UsersList } from './components/UsersList';
import { Conversation } from './components/Conversation';
import AddContact from './components/AddContact';
import { userSelector } from "./features/counter/usersReducer";
import { useSelector } from 'react-redux';
import { createBrowserRouter,RouterProvider } from "react-router-dom"

function useValue(){
  const value = useSelector(userSelector);
  return value;
}



function App() {
  const {toggleAddContact}=useValue();

  const router = createBrowserRouter([
    {
      path:"/",
      element:[<Navbar/>,<UsersList/>,<Conversation/>]
      // children:[
      //   {path:"",element:<Navbar/>},
      //   {path:"",element:<UsersList/>}
      // ]
    }
  ])


  if(toggleAddContact===true){
    return(
      <AddContact/>
    )
  }
  return (
    <>
    <div className='App'>

    
      <RouterProvider router={router}>
      </RouterProvider>
      </div>
    </>
    
  )
}

export default App;
