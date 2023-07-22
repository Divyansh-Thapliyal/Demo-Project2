
import { useState } from "react";

import InputForm from "./components/InputForm";
import UsersList from "./components/UsersList";

// let Users=[];

function App() {
 
   const [UserList,setUserList]=useState([]);

  const add=(user)=>
  {
      setUserList((prevUsersList)=>
      {
        return [...prevUsersList,user];
      })
  }
  
  return (<div>
      <InputForm userDataAdd={add}></InputForm>
      <UsersList items={UserList}></UsersList>
    </div>
  );
}

export default App;
