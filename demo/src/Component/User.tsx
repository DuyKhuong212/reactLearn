import React, { useState } from 'react';

import { ChildLogin } from './ChildLogin';
import { ChildUser } from './ChildDeleteUser';

export interface UserProps {
    id: string;
    name: string;
    password: string;
  }
  
  export interface ChildUserProps {
    userProps: UserProps[];
    setUserProps: React.Dispatch<React.SetStateAction<UserProps[]>>;
    
  }
export const User = () => {
  const [userProps, setUserProps] = useState<UserProps[]>([
    { id: '1', name: 'khuong', password: '123' },
    { id: '2', name: 'haha', password: '456' },
  ]);

  return (
    <>
      <ChildLogin userProps={userProps} setUserProps={
        function (value: React.SetStateAction<UserProps[]>): void {
              throw new Error('Function not implemented.');
          }
      }/>
          <ChildUser userProps={userProps} setUserProps={setUserProps} />
    </>
  );
};
