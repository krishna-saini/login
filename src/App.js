import React, { useState } from "react";
import AddUser from "./AddUser/AddUser";

import DisplayUser from "./DisplayUser/DisplayUser";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (enteredUsername, enteredAge) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        {
          name: enteredUsername,
          age: enteredAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  let content1;
  if (usersList.length > 0) {
    content1 = <DisplayUser users={usersList} />;
  }

  return (
    <>
      <AddUser onClick={addUserHandler} />
      {content1}
    </>
  );
}

export default App;
