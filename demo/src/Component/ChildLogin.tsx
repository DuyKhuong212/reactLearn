import React, { useState } from 'react'
import { ChildUserProps } from './User'
// import {useNavigate} from 'react-router-dom'
export const ChildLogin = ({userProps}:ChildUserProps) => {
    const [textEmail, setTextEmail] = useState("");
    const [textPass, setTextPass] = useState("");
    const [checkLogin, setCheckLogin] = useState(false);
    // const navigate = useNavigate();

    const email = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextEmail(event.target.value);
    };
  
    const passWord = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextPass(event.target.value);
    };
  
    const handleSubmit = () => {
      if (
        userProps.find(
          (user) =>
            user.name === textEmail && user.password === textPass && checkLogin === false
        )
      ) {
        console.log("thanh cong");
        setCheckLogin(true);
        // navigate("/users");
      } else {
        console.log("vui long nhap lai");
        setCheckLogin(false);
      }
    };
  return (
    <div> 
    <form/>
    <label htmlFor="email">Email:</label>
    <input id="email" type="text" onChange={email} />
    <br/>
    <label htmlFor="passWord">Password:</label>
    <input id="passWord" type="password" onChange={passWord} />
    <button className="btn" children="SubMit" onClick={handleSubmit} />
  
  </div>
  )
}
