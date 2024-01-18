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

  const { toggleAddContact } = useValue();

  const router = createBrowserRouter([

    {
      path:"/",

      element:<Navbar/>,

      children:[

        {

          index:true,

          element:[<UsersList/>,<Conversation/>]

        },
        {
          path:"friend/:name",
          element:[<UsersList/>,<Conversation/>]
        }

      ]

    },

    {

      path:"/addContact",

      element:<AddContact/>,

    },
    
  ])


  if(toggleAddContact===true){

    return(

      <RouterProvider router={router}>
        <AddContact/>
      </RouterProvider>

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
