import ContactApp from "./components/ContactApp"
import ContactList from "./components/ContactList"
import NotFound from "./pages/NotFound"
import AddContact from "./components/AddContact"

// const routes=[
//     {path:"/",element:<ContactApp />},
//     {path:"*",element:<NotFound/>},
//     {path:"/contacts",element:<ContactList />}

// ]
const routes=[
    {path:"/",element:<AddContact  />},
    {path:"*",element:<NotFound/>},
    {path:"/contacts",element:<ContactList />}
  
  ]

export default routes