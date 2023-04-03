import { ChildUserProps, UserProps } from "./User";
import {Route, Routes} from 'react-router-dom'
import { ChildLogin } from "./ChildLogin";
import { SetStateAction } from "react";

export const ChildUser = ({ userProps, setUserProps }: ChildUserProps) => {

  const handleDelete = (userId: string) => {
    const updatedUser = userProps.filter((userData) => userData.id !== userId);
    setUserProps(updatedUser);
    
  };
  return (
    <div>
     
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {userProps.map((userData) => (
              <tr key={userData.id}>
                <td>{userData.id}</td>
                <td>{userData.name}</td>
                <td>
                  <button
                    className="btn"
                    children="delete"
                    onClick={() => handleDelete(userData.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
  );
};
