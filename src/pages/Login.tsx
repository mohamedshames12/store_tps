import {useState} from 'react';
import {login, logout} from '../store';
import {useDispatch, useSelector} from 'react-redux';
const Login = () => {
    const [newUserName, setNreUserName] = useState<string>("");
    const dispastch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
        <input type="text" placeholder='enter your name' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNreUserName(e.target.value)}/>
        <button onClick={() => dispastch(login({username: newUserName}))}>Login</button>
        <button onClick={() => dispastch(logout())}>Logout</button>
        <h1>{username}</h1>
    </div>
  )
}

export default Login