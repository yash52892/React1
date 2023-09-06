import React, { useState } from "react";
import Error from "./Error";
import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./form.module.css";

const Form = (props) => {
  const [n, setname] = useState("");
  const [a, setage] = useState("");
  const [error, setError] = useState();

  const obj = {
    nam: n,
    age: a,
    id: Math.random(),
  };

  const collectname = (e) => {
    setname(e.target.value);
  };

  const collectage = (e) => {
    setage(e.target.value);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    if (n.trim().length === 0 || a.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter the valid input",
      });
      return;
    }

    if (+obj.age < 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter the valid age(<0)",
      });
      return;
    }
    props.userDetails(obj);
    setname("");
    setage("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
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
          <input type="text" id="name" value={n} onChange={collectname} />
          <label htmlFor="age">Age(years)</label>
          <input type="number" id="age" value={a} onChange={collectage} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
