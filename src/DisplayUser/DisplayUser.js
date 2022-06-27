// import styles from "./DisplayUser.module.css";
import Card from "../UI/Card/Card";

import sytles from "./DisplayUser.module.css";

const DisplayUser = (props) => {
  console.log("displayuser");

  return (
    <Card className={sytles.users}>
      <ul>
        {props.users.map((user) => (
          <li
            key={user.id}
            user={user}
          >{`${user.name} (${user.age} years old) `}</li>
        ))}
      </ul>
    </Card>
  );
};

export default DisplayUser;
