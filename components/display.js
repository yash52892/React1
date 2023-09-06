import React from "react";
import "./form.css";

const Display = (props) => {
let Isvalid=0
if(props.dat.age<0)
Isvalid=1;
else
Isvalid=0;
  
return(
  <div className={`modal ${!Isvalid? 'invalid' : 'valid'}`}>
    {props.dat.nam}{props.dat.age}
    <div className="modal-content">
    {'Please enter the positive age'}
    </div>
  
  </div>
)
}
export default Display;
