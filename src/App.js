import React,{ useState } from 'react';
import './App.css';
import UserList from './components/Users/UserList/UserList';
import AddUser from './components/Users/AddUser/AddUser';

function App() {
  const [userList,setUserList]=useState([
  ])
  const onAddUserHandler = (user) => {
    console.log(user);
    setUserList( prevList => {
      const updatedList=[...prevList];
      updatedList.unshift({id: Math.random(), name: user.name, age: user.age });
      return updatedList;
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
