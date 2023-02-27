import { useRef, useState } from "react";

function SimpleInput() {
  // controlled component
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const isNamedValid = enteredName.trim() !== "";

  let isFormValid = false;

  // const name = useRef(); // uncontrolled component
  // const divRef = useRef();

  if (isNamedValid) {
    isFormValid = true;
  }

  const submitHandler = (evt) => {
    evt.preventDefault();

    // console.log("clicked !!!");
    // const inpValue = name.current.value;

    // console.log("inp val: ", name);

    // console.log("divRef: ", divRef);

    // if (inpValue.trim() === "") {
    //   alert("name is manadatry");
    // }

    console.log("enteredName: ", enteredName);
    setNameTouched(true);
  };

  const inputNameHandler = (evt) => {
    setEnteredName(evt.target.value);
    setNameTouched(true);
  };

  const nameInpClass =
    !isNamedValid && nameTouched ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInpClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={inputNameHandler}
        />
        {!isNamedValid && nameTouched ? (
          <p className="error-text">Name should not be Empty!</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-control">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" />
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default SimpleInput;
