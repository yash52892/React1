import React, { useState } from "react";
import Form from "./components/form.";
import "./App.css";
import List from "./components/List";


const App = () => {
  const [d, setData] = useState([]);
  const getData = (data) => {
    setData((preData)=>{
      return [...preData,data];
    });
  };

  return (
    <>
      <Form userDetails={getData} />
      <List items={d} />
    </>
  );
};

export default App;
