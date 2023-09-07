import React, { useState, useRef, Fragment} from "react";
import Error from "./Error";
import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./form.module.css";

const Form = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const cnameInputRef=useRef();

  const [error, setError] = useState();

  const changeHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCname= cnameInputRef.current.value;
   
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter the valid input",
      });
      return;
    }

    if (+enteredUserAge < 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter the valid age(<0)",
      });
      return;
    }

    if(enteredCname.trim().length === 0)
    {
      setError({
        title: "Form is not valid",
        message: "Please enter the College name"
        });
        return;
    }

    const obj = {
      nam: enteredName,
      age: enteredUserAge,
      cn: enteredCname,
      id: Math.random()
    };
    
    props.userDetails(obj);
    
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    cnameInputRef.current.value='';
  };


  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={changeHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="name" ref={nameInputRef} />
          <label htmlFor="age">Age(years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <label htmlFor="cname">College Name</label>
          <input type="text" id="cname" ref={cnameInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default Form;
