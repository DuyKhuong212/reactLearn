import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [textEmail, setTextEmail] = useState()
  const [textPass, setTextPass] = useState()
  const [checkLogin, setCheckLogin] = useState(false)
  const [user, setUser] = useState([{id: '', name: '', password:''}])
  
  useEffect(() => {
    setUser([
      {id: '1', name: 'khuong', password:'123'},
      {id: '2', name: 'hihi', password:'456'}
      ])
  },[user])

  const email = (event:any) => {
    setTextEmail(event.target.value)
  }
  const passWord = (event:any) => {
    setTextPass(event.target.value)
  }
  

  const handleSubmit = () => {
    if(user.find((user) => user.name === textEmail && user.password === textPass && checkLogin === false )) {
      console.log('thanh cong')
      setCheckLogin(true)
    } else{
      console.log('vui long nhap lai')
      setCheckLogin(false)
    }
    
  }
  const handleDelete = (userId:any) => {
    const updatedUser = user.filter((userData) => userData.id !== userId);
    setUser(updatedUser);
  }
 

  return (
    <div>
      <form />
      <label htmlFor='email' children ='Email: '/>
      <input id='email' type='text' onChange={email}/>
      <label htmlFor='passWord' children ='PassWord: '/>
      <input id='passWord' type='password' onChange={passWord}/>
      <button className='btn'  children='SubMit'onClick={handleSubmit} />
      <div>
        <table/>
        <thead>
        <tr>
        <th>id</th>
        <th>name</th>
        <th>action</th>
        </tr>
        
        </thead>
       <tbody>
        {user.map((userData) =>(
          <tr key={userData.id}>
          <td>{userData.id}</td>
          <td>{userData.name}</td>
          <td>
            <button className='btn' children='delete' onClick={() =>handleDelete(userData.id)} />
          </td>
          </tr>
        )) }
       </tbody>
    
      </div>
    </div>
    
  )
}

export default App
