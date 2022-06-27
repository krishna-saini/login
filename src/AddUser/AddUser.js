import styles from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

import ErrorModal from "../UI/ErrorModal/ErrorModal";

import { useRef, useState } from "react";

const AddUser = (props) => {
  //setting ref
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [errorContent, setErrorContent] = useState();

  // const usernameChangeHandler = (e) => {
  //   setEnteredUsername(e.target.value);
  // };

  // const ageChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  const submitUserHandler = (e) => {
    e.preventDefault();
    //usinmg ref as we just wanna read value of username and age

    console.log(nameInputRef);

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorContent(
        <ErrorModal
          title="Invalid Input"
          message="Please enter a valid name and age (non-empty values)"
          onClick={errorHandler}
        />
      );
      return;
    } else if (+enteredAge < 1) {
      setErrorContent(
        <ErrorModal
          title="Invalid age"
          message="enter positive age(>0)"
          onClick={errorHandler}
        />
      );
      return;
    }
    props.onClick(enteredUsername, enteredAge);

    //resetting logic 3--its okish here but not recommended
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    //resetting logic with states
    // setEnteredUsername("");
    // setEnteredAge("");

    //Resetting logic 1--->same as 3
    // document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };

  const errorHandler = () => {
    setErrorContent(null);
  };

  return (
    <Card className={styles.input}>
      {errorContent}
      {/* for customises html tags, className is not defined, it will works as prop and we need to acept this prop in Card component file and there we need to add it to className */}
      <form onSubmit={submitUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={nameInputRef} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
