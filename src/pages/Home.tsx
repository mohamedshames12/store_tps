import React from 'react'
import { useSelector} from 'react-redux';
const Home = () => {
    const username = useSelector((state: any) => state.user.value.username);

  return (
    <div>
       <p>Welcome: {username}</p>
    </div>
  )
}

export default Home
