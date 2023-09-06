import React from "react";
import "./List.css";

const List = (props) => {
  return (
    <ul className="list">
      {
      (Array.isArray(props.items))?((props.items).map((user) => (
        <li key={user.id}>
            {user.nam} is {user.age} years old and studying at {user.cn}
      </li>
      )
      )):
      <span></span>}
    </ul>
  );
};

export default List;
