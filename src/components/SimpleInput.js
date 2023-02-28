import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [entredNameTouch, setEnteredNameTouch] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNameIsValid && entredNameTouch;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [entredEmailTouch, setEnteredEmailTouch] = useState(false);

  const enteredEmailIsValid =
    enteredEmail.trim() != "" &&
    enteredEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  const emailInputIsInValid = !enteredEmailIsValid && entredEmailTouch;

  const [userData, setUserData] = useState([]);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  function updateNameHandler(event) {
    setEnteredName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    setEnteredNameTouch(true);
    setEnteredEmailTouch(true);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouch(false);
    setEnteredEmailTouch(false);

    console.log("submit handeler called");

    const user = { name: enteredName, email: enteredEmail };

    setUserData([...userData, user]);
    console.log("userData: ", userData);
  }

  const onBlurHandler = () => {
    setEnteredNameTouch(true);
  };

  const onEmailBlurHandler = () => {
    setEnteredEmailTouch(true);
  };

  const updateEmailHandler = (evt) => {
    setEnteredEmail(evt.target.value);
  };

  const formClasses = !nameInputIsInValid
    ? "form-control"
    : "form-control invalid";

  const emailClass = !emailInputIsInValid
    ? "form-control"
    : "form-control invalid";

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={formClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onBlur={onBlurHandler}
            onChange={updateNameHandler}
          />
          {nameInputIsInValid && (
            <p className="error-text">Name should not be Empty!</p>
          )}
        </div>
        <div className={emailClass}>
          <label htmlFor="name">Your Email</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onBlur={onEmailBlurHandler}
            onChange={updateEmailHandler}
          />
          {emailInputIsInValid && (
            <p className="error-text">Enter valid Email!</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>

      <div className="form-control">
        users:
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>Edit Button</td>
                  <td>Delete Button</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SimpleInput;
